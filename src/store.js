import { createStore } from 'redux';
import { appButton } from './reducers/reducers'

const defaultState = {
  status: false,
}

// make a root reducer to compile all reducers and put in place of appButton
const store = createStore(
  appButton,
  defaultState,
  // this is middleware that enables the redux devtools extentions in chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
