import { useDispatch, useSelector } from "react-redux"

import {
    setIsAddingPlayer,
    setSelectedDimensions,
    setIsGameStarted,
} from "../../store/gameMenu"
import { init as boardInit } from "../../store/board"
import { init as playersInit } from "../../store/players"

import AddPlayerPopup from "../AddPlayerPopup/AddPlayerPopup"

import "./GameMenu.css"

const GameMenu = () => {
    const { isAddingPlayer, selectedPlayers, selectedDimensions } = useSelector(
        (state) => state.gameMenu
    )
    const dispatch = useDispatch()
    return (
        <div className="GameMenu">
            {isAddingPlayer && <AddPlayerPopup />}
            <div className="gameSettings">
                <h3>Amőba játék</h3>
                <section>
                    <h5>Játékosok:</h5>
                    <ul>
                        {selectedPlayers.map((player) => (
                            <li key={player.id} style={{ color: player.color }}>
                                {player.name} {player.symbol}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => dispatch(setIsAddingPlayer(true))}>
                        Játékos hozzáadása
                    </button>
                </section>
                <section>
                    <h5>Pálya méretek:</h5>
                    <div>
                        <div>
                            <input
                                defaultChecked={true}
                                id="10x10"
                                name="boardDimensions"
                                type="radio"
                                value="10x10"
                                onChange={(e) =>
                                    dispatch(
                                        setSelectedDimensions(e.target.value)
                                    )
                                }
                            />
                            <label htmlFor="10x10">10 x 10</label>
                        </div>
                        <div>
                            <input
                                id="25x25"
                                value="25x25"
                                name="boardDimensions"
                                type="radio"
                                onChange={(e) =>
                                    dispatch(
                                        setSelectedDimensions(e.target.value)
                                    )
                                }
                            />
                            <label htmlFor="25x25">25 x 25</label>
                        </div>
                        <div>
                            <input
                                id="50x50"
                                value="50x50"
                                name="boardDimensions"
                                type="radio"
                                onChange={(e) =>
                                    dispatch(
                                        setSelectedDimensions(e.target.value)
                                    )
                                }
                            />
                            <label htmlFor="50x50">50 x 50</label>
                        </div>
                        <div>
                            <input
                                id="75x75"
                                value="75x75"
                                name="boardDimensions"
                                type="radio"
                                onChange={(e) =>
                                    dispatch(
                                        setSelectedDimensions(e.target.value)
                                    )
                                }
                            />
                            <label htmlFor="75x75">75 x 75</label>
                        </div>
                        <div>
                            <input
                                id="100x100"
                                value="100x100"
                                name="boardDimensions"
                                type="radio"
                                onChange={(e) =>
                                    dispatch(
                                        setSelectedDimensions(e.target.value)
                                    )
                                }
                            />
                            <label htmlFor="100x100">100 x 100</label>
                        </div>
                    </div>
                </section>
            </div>
            <button
                disabled={!(selectedPlayers.length >= 2)}
                style={{
                    cursor: !(selectedPlayers.length >= 2) && "not-allowed",
                }}
                onClick={() => {
                    dispatch(playersInit(selectedPlayers))
                    dispatch(
                        boardInit({
                            height: selectedDimensions[0],
                            width: selectedDimensions[1],
                        })
                    )
                    dispatch(setIsGameStarted(true))
                }}
            >
                Játék indítása
            </button>
        </div>
    )
}

export default GameMenu
