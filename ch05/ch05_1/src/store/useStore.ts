import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'
import { createLogger } from 'redux-logger'

const logger = createLogger()

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
