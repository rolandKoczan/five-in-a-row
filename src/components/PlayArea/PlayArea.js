import { useSelector, useDispatch } from "react-redux"

import { setSingleElement } from "../../store/board"
import { nextPlayer } from "../../store/players"

import SingleSquare from "../SingleSquare/SingleSquare"

import "./PlayArea.css"

const PlayArea = () => {
    const tiles = useSelector((state) => state.board.tiles)
    const { players, currentPlayer } = useSelector((state) => state.players)

    const dispatch = useDispatch()

    const returnPlayer = (id) => players.find((player) => player.id === id)

    const onTileClicked = (player, y, x, playerId) => {
        if (player === undefined) {
            dispatch(setSingleElement({ y, x, playerId }))
            dispatch(nextPlayer())
        }
    }

    return (
        <div className="PlayArea">
            {tiles.map((row, y) =>
                row.map((playerId, x) => {
                    const player = returnPlayer(playerId)
                    return (
                        <SingleSquare
                            key={`x:${x},y${y}`}
                            x={x}
                            y={y}
                            symbol={player ? player.symbol : ""}
                            color={player ? player.color : "#fff"}
                            onTileClicked={() =>
                                onTileClicked(player, y, x, currentPlayer)
                            }
                        />
                    )
                })
            )}
        </div>
    )
}

export default PlayArea
