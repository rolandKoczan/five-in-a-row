import { useSelector } from "react-redux"

import "./PlayersBoard.css"

const PlayersBoard = () => {
    const { players, currentPlayer } = useSelector((state) => state.players)

    return (
        <div className="PlayersBoard">
            <h2>Players</h2>
            <ul>
                {players.map((player) => (
                    <li key={player.id} style={{ color: player.color }}>
                        <span>{player.name}</span>
                        {currentPlayer === player.id && (
                            <span>
                                <strong> {player.symbol}</strong>
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PlayersBoard
