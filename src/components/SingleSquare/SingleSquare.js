import "./SingleSquare.css"

const SingleSquare = ({ symbol, color, onTileClicked, isWinnerTile }) => {
    return (
        <div
            className={`SingleSquare ${
                isWinnerTile ? "SingleSquare_highlighted" : ""
            }`}
            style={{ color: color, cursor: symbol ? "not-allowed" : "pointer" }}
            onClick={onTileClicked}
        >
            <strong>{symbol}</strong>
        </div>
    )
}

export default SingleSquare
