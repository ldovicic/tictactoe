import Tile from "./Tile"

interface BoardProps {
    xIsNext: boolean;
    tiles: Array<string>;
    onPlay: (nextTiles: Array<string>) => void;
}

export default function Board({xIsNext, tiles, onPlay}: BoardProps) {
    const handleClick = (i: number) => {
        if (tiles[i] || checkWinner(tiles)) return;   
        const nextTiles = tiles.slice();
        if (xIsNext) {
            nextTiles[i] = 'X';
        }
        else {
            nextTiles[i] = 'O';
        }
        onPlay(nextTiles);
    }

    let status;
    const winner = checkWinner(tiles);
    if (winner) {
        status = winner + " won";
    }
    else {
        status = (xIsNext ? 'X' : 'O') + "s turn"
    }

    return (
        <div className="board">
            <div className="status">{status}</div>
            <div className="row">
                <Tile value={tiles[0]} onTileClick={() => handleClick(0)}/>
                <Tile value={tiles[1]} onTileClick={() => handleClick(1)}/>
                <Tile value={tiles[2]} onTileClick={() => handleClick(2)}/>
            </div>
            <div className="row">
                <Tile value={tiles[3]} onTileClick={() => handleClick(3)}/>
                <Tile value={tiles[4]} onTileClick={() => handleClick(4)}/>
                <Tile value={tiles[5]} onTileClick={() => handleClick(5)}/>
            </div>
            <div className="row">
                <Tile value={tiles[6]} onTileClick={() => handleClick(6)}/>
                <Tile value={tiles[7]} onTileClick={() => handleClick(7)}/>
                <Tile value={tiles[8]} onTileClick={() => handleClick(8)}/>
            </div>
        </div>
    )
}

function checkWinner(tiles: Array<string>) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of winConditions) {
        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            return tiles[a];
        }
    }

    return null;
}