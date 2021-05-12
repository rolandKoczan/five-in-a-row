import { createSlice } from "@reduxjs/toolkit"

export const playersSlice = createSlice({
    name: "players",
    initialState: {
        players: [],
        currentPlayer: null,
        winner: null,
    },
    reducers: {
        init: (state, action) => {
            state.players = action.payload
            state.currentPlayer = action.payload[0].id
        },
        nextPlayer: (state) => {
            const currentPlayerIndex = state.players.findIndex(
                (player) => player.id === state.currentPlayer
            )
            if (state.players[currentPlayerIndex + 1] !== undefined) {
                state.currentPlayer = state.players[currentPlayerIndex + 1].id
            } else {
                state.currentPlayer = state.players[0].id
            }
        },
        resetWinner: (state) => {
            state.winner = null
        },
        setWinner: (state, action) => {
            state.winner = action.payload.playerId
        },
    },
})

export const { init, nextPlayer, resetWinner, setWinner } = playersSlice.actions

export default playersSlice.reducer
