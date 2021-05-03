import { configureStore } from "@reduxjs/toolkit"

import boardReducer from "./board"
import playersReducer from "./players"

export default configureStore({
    reducer: { board: boardReducer, players: playersReducer },
})
