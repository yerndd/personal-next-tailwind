import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './features/example/exampleSlice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			example: exampleReducer,
		},
	})
}
