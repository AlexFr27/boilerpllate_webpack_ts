import { slice } from './reducer/reducer'
import * as appSelectors from './selectors'
import AppContainer from './container'

const appActions = {
  ...slice.actions,
}
const appReducer = slice.reducer

export { appReducer, appActions, appSelectors, AppContainer }
