import { useQuiz } from "../contex/QuizContext";

const StartPage = () => {
  const { setCurrentQuestionIndex, setHasStarted } = useQuiz();

  const handleStart = () => {
    setCurrentQuestionIndex(0);
    setHasStarted(true);
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold">Sentence Construction Quiz</h1>
      <p className="mt-2">Answer 10 questions. Each has 30 seconds. Earn coins!</p>
      <button
        className="bg-indigo-600 text-white mt-6 px-6 py-2 rounded"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default StartPage;
