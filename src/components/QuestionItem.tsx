import { Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAswer: (answer: number) => void;
}

export function QuestionItem({ question, count, onAswer }: Props) {
    const [ selectedAnswer, setSelectedAnswer ] = useState<number | null>(null);

    function checkQuestion(key: number) {
        if (selectedAnswer === null) {
            setSelectedAnswer(key);

            setTimeout(() => {
                onAswer(key);
                setSelectedAnswer(null);
            }, 1000);
            
        }
    }

    return (
        <div className="p-5">
            <div className="text-3xl font-bold">{count}. {question.question}</div>
            {question.options.map((item, key) =>
                <div
                    key={key}
                    onClick={() => checkQuestion(key)}
                    className={`
                        text-xl mt-5 px-3 py-2  border border-amber-500 rounded-md

                        ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:bg-amber-600 hover:text-black hover:border-amber-600'}

                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-500 border-green-600 opacity-80 text-black'}

                        ${selectedAnswer !== null && selectedAnswer != question.answer && selectedAnswer === key && 'bg-red-500 border-red-600 opacity-80 text-black'}
                    `}
                >
                    {item}
                </div>
            )}
        </div>
    )
}