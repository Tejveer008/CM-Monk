import Results from "./components/Results";
import SentenceQuestion from "./components/SentenceQuestion";
import StartPage from "./components/StartPage";
import { QuizProvider, useQuiz } from "./contex/QuizContext";

const AppContent = () => {
  const { isFinished, hasStarted } = useQuiz();

 
  if (!hasStarted) return <StartPage />;
  return (
    <div className="className=  bg-gray-100 flex flex-col items-center justify-center px-4 overflow-auto">
      {isFinished ? <Results /> : <SentenceQuestion />}
    </div>
  );
};

const App = () => (
  <QuizProvider>
    <AppContent />
  </QuizProvider>
);

export default App;
