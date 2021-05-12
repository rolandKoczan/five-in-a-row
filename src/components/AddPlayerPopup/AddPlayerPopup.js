import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
    setIsAddingPlayer,
    setSelectedColor,
    setPlayerNameInput,
    setSelectedSymbol,
    addPlayer,
} from "../../store/gameMenu"

import Backdrop from "../Backdrop/Backdrop"

import "./AddPlayerPopup.css"

const AddPlayerPopup = () => {
    const { colors, playerNameInput, selectedSymbol } = useSelector(
        (state) => state.gameMenu
    )
    const dispatch = useDispatch()

    const selectedColor = colors.find((color) => color.selected)

    useEffect(() => {
        const keyPress = (e) => {
            const { key } = e
            if (key === "Enter" && playerNameInput) {
                dispatch(
                    addPlayer({
                        id: Date.now(),
                        name: playerNameInput,
                        symbol: selectedSymbol,
                        color: selectedColor.color,
                    })
                )
            }
            if (key === "Escape") dispatch(setIsAddingPlayer(false))
        }

        document.addEventListener("keydown", keyPress)
        return () => document.removeEventListener("keydown", keyPress)
    }, [dispatch, playerNameInput, selectedSymbol, selectedColor])

    return (
        <Backdrop>
            <div className="AddPlayerPopup">
                <section>
                    <label htmlFor="playerName">Játékos neve:</label>
                    <input
                        autoFocus
                        type="text"
                        name="playerName"
                        value={playerNameInput}
                        onChange={(e) =>
                            dispatch(setPlayerNameInput(e.target.value))
                        }
                    />
                </section>
                <h6>Válassz színt:</h6>
                <section>
                    {colors.map(({ id, color, selected, disabled }) => (
                        <div
                            key={id}
                            className={`singleColor ${
                                selected && "singleColor_selected"
                            } ${disabled && "singleColor_disabled"}`}
                            style={{ backgroundColor: color }}
                            onClick={() =>
                                !disabled && dispatch(setSelectedColor(id))
                            }
                        >
                            {disabled && <div></div>}
                        </div>
                    ))}
                </section>
                <section>
                    <label htmlFor="playerSymbol">Játékos jele:</label>
                    <select
                        defaultValue={selectedSymbol}
                        name="playerSymbol"
                        onChange={(e) =>
                            dispatch(setSelectedSymbol(e.target.value))
                        }
                    >
                        <option value="O">O</option>
                        <option value="X">X</option>
                    </select>
                </section>
                <button
                    disabled={!playerNameInput}
                    style={{ cursor: !playerNameInput && "not-allowed" }}
                    onClick={() =>
                        dispatch(
                            addPlayer({
                                id: Date.now(),
                                name: playerNameInput,
                                symbol: selectedSymbol,
                                color: selectedColor.color,
                            })
                        )
                    }
                >
                    Játékos hozzáadása
                </button>
                <button onClick={() => dispatch(setIsAddingPlayer(false))}>
                    Mégse
                </button>
            </div>
        </Backdrop>
    )
}

export default AddPlayerPopup
