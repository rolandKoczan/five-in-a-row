import { useSelector, useDispatch } from "react-redux"

import { setSingleElement, setWinnerCoordinates } from "../../store/board"
import { nextPlayer, setWinner } from "../../store/players"
import { checkIsWinner } from "../../utility/gameLogic"

import SingleSquare from "../SingleSquare/SingleSquare"

import "./PlayArea.css"

const PlayArea = () => {
    const { tiles, winnerCoordinates } = useSelector((state) => state.board)
    const { players, currentPlayer } = useSelector((state) => state.players)

    const dispatch = useDispatch()

    const returnPlayer = (id) => players.find((player) => player.id === id)

    const onTileClicked = (player, y, x, playerId) => {
        const winnerCoordinates = checkIsWinner(tiles, playerId, y, x)
        if (player === undefined && !winnerCoordinates) {
            dispatch(setSingleElement({ y, x, playerId }))
            dispatch(nextPlayer())
        } else if (winnerCoordinates) {
            dispatch(setWinnerCoordinates(winnerCoordinates))
            dispatch(setSingleElement({ y, x, playerId }))
            dispatch(setWinner({ playerId }))
        }
    }

    return (
        <div className="PlayArea">
            {tiles.map((row, y) =>
                row.map((playerId, x) => {
                    const player = returnPlayer(playerId)
                    let isWinnerTile = null
                    if (winnerCoordinates) {
                        isWinnerTile = winnerCoordinates.find(
                            (coordinates) =>
                                coordinates.x === x && coordinates.y === y
                        )
                    }
                    return (
                        <SingleSquare
                            key={`x:${x},y${y}`}
                            symbol={player ? player.symbol : ""}
                            color={player ? player.color : "#fff"}
                            isWinnerTile={isWinnerTile}
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
