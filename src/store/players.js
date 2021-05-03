import { createSlice } from "@reduxjs/toolkit"

export const playersSlice = createSlice({
    name: "players",
    initialState: {
        players: [
            {
                id: 1,
                name: "Béla",
                symbol: "X",
                color: "red",
            },
            {
                id: 2,
                name: "János",
                symbol: "O",
                color: "green",
            },
        ],
        currentPlayer: 1,
    },
    reducers: {
        init: (state) => {
            console.log(state)
        },
        nextPlayer: (state) => {
            const nextPlayer = state.players.find(
                (player) => player.id === state.currentPlayer + 1
            )
            if (nextPlayer !== undefined) {
                state.currentPlayer = nextPlayer.id
            } else {
                state.currentPlayer = state.players[0].id
            }
        },
    },
})

export const { init, nextPlayer } = playersSlice.actions

export default playersSlice.reducer
