import { useDispatch, useSelector } from "react-redux"

import { setIsAddingPlayer, setSelectedColor } from "../../store/gameMenu"

import Backdrop from "../Backdrop/Backdrop"

import "./AddPlayerPopup.css"

const AddPlayerPopup = () => {
    const colors = useSelector((state) => state.gameMenu.colors)
    const dispatch = useDispatch()

    return (
        <Backdrop>
            <div className="AddPlayerPopup">
                <section>
                    <label for="playerName">Játékos neve:</label>
                    <input name="playerName" />
                </section>
                <h6>Válassz színt:</h6>
                <section>
                    {colors.map(({ id, color, selected }) => (
                        <div
                            key={id}
                            className={`singleColor ${
                                selected && "singleColor_selected"
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => dispatch(setSelectedColor(id))}
                        ></div>
                    ))}
                </section>
                <section>
                    <label for="playerSymbol">Játékos jele:</label>
                    <select defaultValue="X" name="playerSymbol">
                        <option value="X">O</option>
                        <option value="O">X</option>
                    </select>
                </section>
                <button>Játékos hozzáadása</button>
                <button onClick={() => dispatch(setIsAddingPlayer(false))}>
                    Mégse
                </button>
            </div>
        </Backdrop>
    )
}

export default AddPlayerPopup
