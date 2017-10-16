import { SET_BUTTON_STATUS } from '../actions/actionNames';

export function appButton(prevState, action) {
  // DELETE THIS CODE
  // if (typeof state === 'undefined') {
  //   return defaultState;
  // }
  switch (action.type) {
    case SET_BUTTON_STATUS:
    return {
      ...prevState,
      status: action.status,
    }
    default:
    return prevState
  }
}


// {
//   foo: 123,
//   bar: "baz",
//   status: "broken",
//   status: !action.status,
// }
