import { createSlice } from "@reduxjs/toolkit"

export const boardSlice = createSlice({
    name: "board",
    initialState: {
        winnerCoordinates: null,
        tiles: [],
    },
    reducers: {
        init: (state, action) => {
            const {height, width} = action.payload
            const tiles = []
            for(let i = 0; i < height; i++){
                tiles.push([])
                for(let x = 0; x < width; x++){
                    tiles[i].push(0)
                }
            }
            console.log(tiles)
            state.tiles = tiles
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
