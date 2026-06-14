import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './features/example/exampleSlice'

/**
 * Creates a new Redux store instance.
 * Using a factory function ensures each server render gets a fresh store.
 *
 * @returns {import('@reduxjs/toolkit').EnhancedStore}
 */
export const makeStore = () => configureStore({ reducer: { example: exampleReducer } })
