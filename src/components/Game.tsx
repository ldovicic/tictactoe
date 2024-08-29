import { useState } from "react";
import Board from "./Board"
import Controls from "./Controls";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const current = history[currentMove];

    const handlePlay = (nextTiles: Array<string>) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextTiles];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    const jumpTo = (nextMove: number) => {
        if (nextMove < 0) return;
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    return (
        <div className="game">
            <Board xIsNext={xIsNext} tiles={current} onPlay={handlePlay} />
            {currentMove > 0 && <Controls jumpTo={jumpTo} currentMove={currentMove} />}
        </div>
    )
}