import { createSlice } from '@reduxjs/toolkit'

/**
 * @typedef {object} ExampleState
 * @property {number} value - The current counter value
 */

/** @type {ExampleState} */
const initialState = { value: 0 }

/**
 * Example Redux slice demonstrating counter functionality.
 */
export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		/** Increments the counter by 1 */
		increment: (state) => { state.value += 1 },
		/** Decrements the counter by 1 */
		decrement: (state) => { state.value -= 1 },
		/**
		 * Increments the counter by a given amount.
		 *
		 * @param {ExampleState} state
		 * @param {import('@reduxjs/toolkit').PayloadAction<number>} action
		 */
		incrementByAmount: (state, action) => { state.value += action.payload }
	}
})

export const {
	increment, decrement, incrementByAmount 
} = exampleSlice.actions

export default exampleSlice.reducer
