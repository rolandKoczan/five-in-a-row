import AddPlayerPopup from "../AddPlayerPopup/AddPlayerPopup"

import "./GameMenu.css"

const GameMenu = () => {
    return (
        <div className="GameMenu">
            <AddPlayerPopup />
            <div>
                <h3>Amőba játék</h3>
                <section>
                    <h5>Játékosok:</h5>
                    <button>Játékos hozzáadása</button>
                </section>
                <section>
                    <h5>Pálya méretek:</h5>
                    <div>
                        <div>
                            <input
                                id="10x10"
                                name="boardDimensions"
                                type="radio"
                            />
                            <label for="10x10">10 x 10</label>
                        </div>
                        <div>
                            <input
                                id="25x25"
                                name="boardDimensions"
                                type="radio"
                            />
                            <label for="25x25">25 x 25</label>
                        </div>
                        <div>
                            <input
                                id="50x50"
                                name="boardDimensions"
                                type="radio"
                            />
                            <label for="50x50">50 x 50</label>
                        </div>
                        <div>
                            <input
                                id="75x75"
                                name="boardDimensions"
                                type="radio"
                            />
                            <label for="75x75">75 x 75</label>
                        </div>
                        <div>
                            <input
                                id="100x100"
                                name="boardDimensions"
                                type="radio"
                            />
                            <label for="100x100">100 x 100</label>
                        </div>
                    </div>
                </section>
            </div>
            <button>Játék indítása</button>
        </div>
    )
}

export default GameMenu
