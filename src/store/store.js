import { configureStore } from "@reduxjs/toolkit"

import boardReducer from "./board"
import playersReducer from "./players"
import gameMenuReducer from "./gameMenu"

export default configureStore({
    reducer: {
        board: boardReducer,
        players: playersReducer,
        gameMenu: gameMenuReducer,
    },
})
