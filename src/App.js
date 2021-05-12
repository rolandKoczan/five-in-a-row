import { useSelector } from "react-redux"

import PlayersBoard from "./components/PlayersBoard/PlayersBoard"
import PlayArea from "./components/PlayArea/PlayArea"
import GameMenu from "./components/GameMenu/GameMenu"

import "./App.css"

function App() {
    const isGameStarted = useSelector((state) => state.gameMenu.isGameStarted)
    return (
        <div className="App">
            {isGameStarted ? (
                <>
                    <PlayArea />
                    <PlayersBoard />
                </>
            ) : (
                <GameMenu />
            )}
        </div>
    )
}

export default App
