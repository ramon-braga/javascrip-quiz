"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { Result } from "@/components/Result";
import { questions } from "@/data/questions";
import { useState } from "react";

function Page() {
  const title = 'Javascript Quiz';
  const [ currentQuestion, setCurrentquestion ] = useState(0);
  const [ answers, setAnswers ] = useState<number[]>([]);
  const [ showResult, setShowResult ] = useState(false);
  const [ countCorrectAnswers, setCountCorrectAnswers ] = useState<number>(0);

  function loadNextQuestion() {
    if (questions[currentQuestion + 1]) {
      setCurrentquestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }

  }

  function handleAnswered(answer: number) {
    setAnswers([ ...answers, answer]);

    if (questions[currentQuestion].answer === answer) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }

    loadNextQuestion();
  }

  function handleClickButton() {
    setCurrentquestion(0);
    setAnswers([]);
    setShowResult(false);
    setCountCorrectAnswers(0);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="bg-black text-amber-300 w-screen max-w-xl rounded-md overflow-hidden border border-amber-600">
        
        <div className="text-center text-3xl p-6 bg-black font-bold text-amber-500">{title}</div>

        <div className="p-5 text-xl border-b border-t border-amber-600">
          
          {!showResult &&
            <QuestionItem
              question = {questions[currentQuestion]}
              count = {currentQuestion + 1}
              onAswer = {handleAnswered}
            />
          }
          {showResult &&
            <Result
              answers={answers}
              correct={countCorrectAnswers}
            />
          }
        </div>
        <div className="p-6 text-center bg-black text-amber-300 font-bold">
        {!showResult &&
          `Question ${currentQuestion + 1} out of ${questions.length} 
          `
        }

        {showResult &&
          <button onClick={handleClickButton} className="px-3 py-2 rounded-md bg-back text-amber-500 border border-amber-500 hover:bg-amber-500 hover:text-black">Restart Quiz</button>
        }

        </div>

      </div>
    </div>
  )
};

export default Page;