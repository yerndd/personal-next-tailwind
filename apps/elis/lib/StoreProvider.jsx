'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './store'

/**
 * Client-side Redux store provider.
 * Initializes the store once using a ref to avoid re-creation on re-renders.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - App content to wrap
 * @returns {JSX.Element}
 */
const StoreProvider = ({ children }) => {
	/** @type {React.MutableRefObject<ReturnType<typeof makeStore> | null>} */
	const storeRef = useRef(null)

	// Initialize store once — ref persists across renders without triggering re-renders
	if (!storeRef.current) {
		storeRef.current = makeStore()
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
