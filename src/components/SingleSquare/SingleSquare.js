import "./SingleSquare.css"

const SingleSquare = ({symbol, color, onTileClicked }) => {
    return (
        <div
            className="SingleSquare"
            style={{ color: color, cursor: symbol ? "not-allowed" : "pointer" }}
            onClick={onTileClicked}
        >
            <strong>{symbol}</strong>
        </div>
    )
}

export default SingleSquare
