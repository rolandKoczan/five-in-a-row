import { createSlice } from "@reduxjs/toolkit"

export const gameMenuSlice = createSlice({
    name: "gameMenu",
    initialState: {
        isGameStarted: false,
        isAddingPlayer: false,
        selectedDimensions: [10, 10],
        selectedPlayers: [],
        playerNameInput: "",
        selectedSymbol: "X",
        colors: [
            { id: 1, color: "red", selected: true, disabled: false },
            { id: 2, color: "green", selected: false, disabled: false },
            { id: 3, color: "yellow", selected: false, disabled: false },
            { id: 4, color: "blue", selected: false, disabled: false },
            { id: 5, color: "purple", selected: false, disabled: false },
            { id: 6, color: "azure", selected: false, disabled: false },
            { id: 7, color: "grey", selected: false, disabled: false },
            { id: 8, color: "khaki", selected: false, disabled: false },
            { id: 9, color: "pink", selected: false, disabled: false },
            { id: 10, color: "magenta", selected: false, disabled: false },
            { id: 11, color: "orange", selected: false, disabled: false },
            { id: 12, color: "brown", selected: false, disabled: false },
        ],
    },
    reducers: {
        init: (state) => {
            console.log(state)
        },
        setIsGameStarted: (state, action) => {
            state.isGameStarted = action.payload
        },
        setIsAddingPlayer: (state, action) => {
            state.playerNameInput = ""
            state.isAddingPlayer = action.payload
        },
        addPlayer: (state, action) => {
            const { id, name, symbol, color } = action.payload
            const newColors = state.colors.map((colorElement) => {
                if (colorElement.color === color) {
                    colorElement.disabled = true
                    colorElement.selected = false
                }
                return { ...colorElement }
            })
            const index = newColors.findIndex((color) => !color.disabled)
            newColors[index].selected = true
            state.colors = newColors
            state.isAddingPlayer = false
            state.selectedPlayers.push({ id, name, symbol, color })
        },
        setSelectedColor: (state, action) => {
            const updatedColors = state.colors.map((color) => {
                if (color.id === action.payload) {
                    color.selected = true
                } else {
                    color.selected = false
                }
                return { ...color }
            })
            state.colors = updatedColors
        },
        setPlayerNameInput: (state, action) => {
            state.playerNameInput = action.payload
        },
        setSelectedSymbol: (state, action) => {
            state.selectedSymbol = action.payload
        },
        setSelectedDimensions: (state, action) => {
            const height = action.payload[0] + action.payload[1] + ""
            const width = action.payload[3] + action.payload[4] + ""
            const dimensions = [height, width]
            state.selectedDimensions = dimensions
        },
    },
})

export const {
    setIsAddingPlayer,
    addPlayer,
    setSelectedColor,
    setPlayerNameInput,
    setSelectedSymbol,
    setSelectedDimensions,
    setIsGameStarted,
} = gameMenuSlice.actions

export default gameMenuSlice.reducer
