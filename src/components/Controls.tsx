import back from "../assets/back.png"
import restart from "../assets/restart.png"

interface ControlsProps {
    jumpTo: (move: number) => void;
    currentMove: number;
}

export default function Controls({jumpTo, currentMove}: ControlsProps) {
    return (
        <div className="controls">
            <button className="back" onClick={() => jumpTo(currentMove - 1)}><img src={back} className="backImg"></img></button>
            <button className="restart" onClick={() => jumpTo(0)}><img src={restart} className="restartImg"></img></button>
        </div>
    )
}