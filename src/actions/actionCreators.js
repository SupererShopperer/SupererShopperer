import { SET_BUTTON_STATUS }  from './actionNames';

export function setButtonStatus(status) {
  return {
    type: SET_BUTTON_STATUS,
    status: status,
  }
}
