import { AppStateType } from '../../store/store'

export const selectJWT = (state: AppStateType) => state.app.jwt
export const selectStatus = (state: AppStateType) => state.app.status
export const selectError = (state: AppStateType) => state.app.error
