import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './entities/todoswithapi'

export const makeStore = () => {
  return configureStore({
    devTools: process.env.NODE_ENV === 'development' ? true : false,
    reducer: {
      todoswithapi: todosReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']