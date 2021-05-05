import { createSlice } from "@reduxjs/toolkit"

export const gameMenuSlice = createSlice({
    name: "gameMenu",
    initialState: {
        isAddingPlayer: false,
        selectedDimensions: "10x10",
        selectedPlayers: [],
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
        setIsAddingPlayer: (state, action) => {
            state.isAddingPlayer = action.payload
        },
        addPlayers: (state, action) => {
            const { name, symbol, color } = action.payload
            state.colors = state.colors.map((colorElement) => {
                if (colorElement.color === color) colorElement.disabled = true
                return { ...colorElement }
            })
            state.selectedPlayers.push({ name, symbol, color })
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
    },
})

export const {
    setIsAddingPlayer,
    addPlayers,
    setSelectedColor,
} = gameMenuSlice.actions

export default gameMenuSlice.reducer
