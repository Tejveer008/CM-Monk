import { useEffect } from "react";
import { useQuiz } from "../contex/QuizContext";

const Results = () => {
  const { questions, answers, score, setScore } = useQuiz();

  useEffect(() => {
    let correct = 0;
    answers.forEach((ans, i) => {
      if (JSON.stringify(ans) === JSON.stringify(questions[i].correctAnswer)) {
        correct++;
      }
    });
    setScore(correct);
  }, []);

  return (
    <div className="p-6 max-w-3xl w-full bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
        Score: {score} / 10
      </h2>
      {questions.map((q, i) => (
        <div key={q.questionId} className="mb-6 border-b pb-4">
          <p className="text-gray-800 font-semibold">Q{i + 1}: {q.question}</p>
          <p className="text-sm mt-1">
            <strong>Your Answer:</strong> {answers[i]?.join(', ') || 'Not Answered'}
          </p>
          {JSON.stringify(answers[i]) !== JSON.stringify(q.correctAnswer) && (
            <p className="text-sm text-red-600">
              <strong>Correct Answer:</strong> {q.correctAnswer.join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;
