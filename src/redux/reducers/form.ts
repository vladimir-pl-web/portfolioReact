import { fromActionType } from "../actions/form"

export type formStateType = typeof initState
export const FORM_ERROR = 'FORM_ERROR'
export const FORM_SENDING = 'FORM_SENDING'
export const FORM_SUCCESS = 'FORM_SUCCESS'
const initState = {
  success: false,
  error: false,
  sending: false
}

export const formReducer = (state: formStateType = initState, action: fromActionType) => {
  switch (action.type) {
    case FORM_SUCCESS:
      return { ...state, success: action.success }
    case FORM_ERROR:
      return { ...state, error: action.error }
        case FORM_SENDING:
      return { ...state, sending:action.sending }
   default: {return state} 
  }   
}