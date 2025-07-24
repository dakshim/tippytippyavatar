import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    settings: {
        skinColor: '#edb98a',
        hairBack: 'h_longhair',
        tattoos: '',
        accessories: undefined,
        eyes: 'e_default',
        eyebrows: 'eb_default',
        mouth: 'm_default',
        cloth: 'c_hoodie',
        hairColor1: 'c_hoodie',
        hairColor2: 'c_hoodie',
        hairColor3: 'c_hoodie',
        fabricColor: '#545454',
        glassOpacity: 'c_hoodie',
        hairFront: 'h_longhair',
        facialHair: undefined,
        glasses: undefined,
        isMenuActive: false,
        backgroundColor: '#ffffff'
    }
}



// A slice for settings with our three reducers
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSettings: (state, { payload }) => {
            state.settings = { ...state.settings, ...payload }
        },
    },
})

// Three actions generated from the slice
export const { setSettings } = settingsSlice.actions

// A selector
export const settingsSelector = (state) => state.settings

// The reducer
export default settingsSlice.reducer