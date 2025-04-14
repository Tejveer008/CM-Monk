import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { Question, QuizContextType } from "../data/types";
  
  // Create context
  const QuizContext = createContext<QuizContextType | undefined>(undefined);
  
  // Provider component
  export function QuizProvider({ children }: { children: ReactNode }) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[][]>([]);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
  
    useEffect(() => {
        fetch("http://localhost:4000/data")
          .then(res => res.json())
          .then(data => {
            if (data.questions) {
              setQuestions(data.questions);
            } else if (data.data?.questions) {
              setQuestions(data.data.questions);
            } else {
              console.error("Invalid response structure:", data);
            }
          })
          .catch(err => console.error("Failed to fetch questions:", err));
      }, []);
      
  
    const value: QuizContextType = {
      questions,
      currentQuestionIndex,
      setCurrentQuestionIndex,
      answers,
      setAnswers,
      score,
      setScore,
      isFinished,
      setIsFinished,
      hasStarted,
      setHasStarted,
    };
  
    return (
      <QuizContext.Provider value={value}>
        {children}
      </QuizContext.Provider>
    );
  }
  
  // Custom hook
  export function useQuiz() {
    const context = useContext(QuizContext);
    if (!context) {
      throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
  }
  