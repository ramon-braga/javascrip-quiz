type Props = {
    answers: number[];
    correct: number;
}

export function Result({ answers, correct }: Props) {

    return (
        <div className="w-full text-center text-3xl font-bold text-white">
            <span>You got {((correct / answers.length) * 100).toFixed(1)}% correct</span>
        </div>
    );
}