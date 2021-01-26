import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  permission: 'user',
  jwt: '',
  status: 'idle' as RequestStatusType,
  error: '',
  isInitialized: false,
}

export const slice = createSlice({
  name: `AppReducer`,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ jwt: string }>) {
      state.jwt = action.payload.jwt
    },
    setAppStatus: (
      state,
      action: PayloadAction<{ status: RequestStatusType }>
    ) => {
      state.status = action.payload.status
    },
    setAppError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error
    },
    setAppInitialized: (
      state,
      action: PayloadAction<{ isInitialized: boolean }>
    ) => {
      state.isInitialized = action.payload.isInitialized
    },
  },
})

export const asyncActions = {}
