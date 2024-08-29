interface TileProps {
    value: string;
    onTileClick: () => void;
}

export default function Tile({ value, onTileClick }: TileProps) {
    return (
        <button className="tile" onClick={onTileClick}>{value}</button>
    );
}