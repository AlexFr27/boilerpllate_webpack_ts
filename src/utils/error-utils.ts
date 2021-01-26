import { AxiosError } from 'axios'
import { Dispatch } from 'redux'
import { appActions } from '../features/App'
import { ResponseType } from '../features/App/types'

export type ThunkAPIType = {
  dispatch: Dispatch
  rejectWithValue: Function
}

export const handleAsyncServerAppError = <D>(
  data: ResponseType<D>,
  thunkAPI: ThunkAPIType,
  showError = true
) => {
  if (showError) {
    thunkAPI.dispatch(
      appActions.setAppError({
        error: data.messages.length ? data.messages[0] : 'Some error occurred',
      })
    )
  }
  thunkAPI.dispatch(appActions.setAppStatus({ status: 'failed' }))
  return thunkAPI.rejectWithValue({
    errors: data.messages,
    fieldsErrors: data.fieldsErrors,
  })
}

export const handleAsyncServerNetworkError = (
  error: AxiosError,
  thunkAPI: ThunkAPIType,
  showError = true
) => {
  if (showError) {
    thunkAPI.dispatch(
      appActions.setAppError({
        error:
          error.message &&
          error.response &&
          error.response.data['hydra:description']
            ? [
                error.message,
                '\n',
                error.response.data['hydra:description'],
              ].toString()
            : 'Some error occurred',
      })
    )
  }
  thunkAPI.dispatch(appActions.setAppStatus({ status: 'failed' }))

  return thunkAPI.rejectWithValue({
    errors: [error.message],
    fieldsErrors: undefined,
  })
}

export const checkIsNumber = (param) => /^([-+])?([0-9]+|Infinity)$/.test(param)
