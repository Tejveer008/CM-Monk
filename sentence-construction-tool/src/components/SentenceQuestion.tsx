import { useEffect, useState } from "react";
import { useQuiz } from "../contex/QuizContext";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";

const SentenceQuestion = () => {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setAnswers,
    setIsFinished
  } = useQuiz();

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const question = questions[currentQuestionIndex];

  useEffect(() => {
    setSelectedWords([]);
  }, [currentQuestionIndex]);

  if (!question) return <div>Loading...</div>;

  // ✅ FIX: Split on any number of underscores to detect blanks properly
  const blanks = question.question.split(/_+/);
  const isComplete = selectedWords.length === question.correctAnswer.length;

  const handleOptionClick = (word: string) => {
    if (selectedWords.includes(word)) return;
    if (selectedWords.length < question.correctAnswer.length) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleFilledClick = (index: number) => {
    const updated = [...selectedWords];
    updated.splice(index, 1);
    setSelectedWords(updated);
  };

  const handleNext = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selectedWords;
    setAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 === questions.length) {
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8  max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <Timer key={question.questionId} onTimeUp={handleNext} />
        <button className="text-sm text-gray-500 hover:text-red-600 font-medium">
          Quit
        </button>
      </div>

      <div className="mb-6">
        <ProgressBar
          currentCount={currentQuestionIndex + 1}
          totalCount={questions.length}
        />
      </div>

      <h2 className="text-center font-semibold text-lg text-gray-700 mb-6">
        Select the missing words in the correct order
      </h2>

      {/* ✅ Render sentence with dynamic blanks */}
      <div className="mb-6 text-lg leading-8 text-center">
        {blanks.map((part, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span>{part.trim()}</span>
            {i < question.correctAnswer.length && (
              <button
                className="inline-block border border-gray-400 bg-gray-100 px-3 py-1 rounded mx-1 min-w-[80px] text-indigo-700"
                onClick={() => handleFilledClick(i)}
              >
                {selectedWords[i] || "_____"}
              </button>
            )}
          </span>
        ))}
      </div>

      {/* Options */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {question.options.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded border font-medium transition ${
              selectedWords.includes(option)
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={selectedWords.includes(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next button only when all blanks filled */}
      {isComplete && (
        <div className="text-right">
          <button
            onClick={handleNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default SentenceQuestion;
