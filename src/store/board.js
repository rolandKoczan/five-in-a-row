import { createSlice } from "@reduxjs/toolkit"

export const boardSlice = createSlice({
    name: "board",
    initialState: {
        winnerCoordinates: null,
        tiles: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
    },
    reducers: {
        init: (state) => {
            console.log(state)
        },
        setSingleElement: (state, action) => {
            const { x, y, playerId } = action.payload
            state.tiles[y][x] = playerId
        },
        resetWinnerCoordinates: (state) => {
            state.winnerCoordinates = null
        },
        setWinnerCoordinates: (state, action) => {
            state.winnerCoordinates = action.payload
        },
    },
})

export const {
    init,
    setSingleElement,
    resetWinnerCoordinates,
    setWinnerCoordinates,
} = boardSlice.actions

export default boardSlice.reducer
