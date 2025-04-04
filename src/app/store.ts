import { configureStore } from '@reduxjs/toolkit'
import { mainSlice } from '../features/mainSlice/mainSlice'

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch