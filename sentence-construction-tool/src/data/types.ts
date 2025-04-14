export type Question = {
    questionId: string;
    question: string;
    options: string[];
    correctAnswer: string[];
  };
  
  export type QuizContextType = {
    questions: Question[];
    currentQuestionIndex: number;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    answers: string[][];
    setAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    isFinished: boolean;
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
    hasStarted: boolean;
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
  }
  