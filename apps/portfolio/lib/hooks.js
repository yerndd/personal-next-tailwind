import { useDispatch, useSelector } from 'react-redux'

/**
 * Typed wrapper around `useDispatch`.
 * Use this instead of plain `useDispatch` throughout the app.
 *
 * @returns {import('@reduxjs/toolkit').Dispatch}
 */
export const useAppDispatch = () => useDispatch()

/**
 * Typed wrapper around `useSelector`.
 * Use this instead of plain `useSelector` throughout the app.
 *
 * @type {import('react-redux').TypedUseSelectorHook<ReturnType<ReturnType<typeof import('./store').makeStore>['getState']>>}
 */
export const useAppSelector = useSelector
