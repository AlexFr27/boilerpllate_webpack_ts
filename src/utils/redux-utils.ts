import { AppDispatchType } from '../store/store'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { useMemo } from 'react'
import {
  handleAsyncServerAppError,
  handleAsyncServerNetworkError,
  ThunkAPIType,
} from './error-utils'
import { RequestStatusType } from '../features/App/reducer/reducer'
import { appActions } from '../features/App'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatchType>()

export function useActions<T extends ActionCreatorsMapObject>(actions: T) {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [])
}

export const handleSetAppStatus = (
  status: RequestStatusType,
  thunkAPI: ThunkAPIType
) => thunkAPI.dispatch(appActions.setAppStatus({ status }))

export const ThunkCreator = async (
  creator: { param: any; apiMethod: (param: any) => any; status?: number },
  thunkAPI: ThunkAPIType
) => {
  creator.status = creator.status ? creator.status : 200
  handleSetAppStatus('loading', thunkAPI)
  try {
    const res = await creator.apiMethod(creator.param)
    if (res.status === creator.status) {
      handleSetAppStatus('succeeded', thunkAPI)
      return res.data
    } else {
      return handleAsyncServerAppError(res.data, thunkAPI)
    }
  } catch (error) {
    return handleAsyncServerNetworkError(error, thunkAPI)
  }
}
