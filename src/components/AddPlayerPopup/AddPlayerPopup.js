import { useState } from "react"

import Backdrop from "../Backdrop/Backdrop"

import "./AddPlayerPopup.css"

const AddPlayerPopup = () => {
    const [colors, setColors] = useState([
        { id: 1, color: "red", selected: true },
        { id: 2, color: "green", selected: false },
        { id: 3, color: "yellow", selected: false },
        { id: 4, color: "blue", selected: false },
        { id: 5, color: "purple", selected: false },
        { id: 6, color: "azure", selected: false },
        { id: 7, color: "grey", selected: false },
        { id: 8, color: "khaki", selected: false },
        { id: 9, color: "pink", selected: false },
        { id: 10, color: "magenta", selected: false },
        { id: 11, color: "orange", selected: false },
        { id: 12, color: "brown", selected: false },
    ])

    return (
        <Backdrop>
            <div className="AddPlayerPopup">
                <section>
                    <label for="playerName">Játékos neve:</label>
                    <input name="playerName" />
                </section>
                <section>
                    {colors.map(({ id, color, selected }) => (
                        <div
                            key={id}
                            className={`singleColor ${
                                selected && "singleColor_selected"
                            }`}
                            style={{ backgroundColor: color }}
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
                <button>Mégse</button>
            </div>
        </Backdrop>
    )
}

export default AddPlayerPopup
