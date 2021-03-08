import { Dispatch } from "redux";
import { sendMessage } from "../../api";
import { FORM_ERROR, FORM_SENDING, FORM_SUCCESS } from "../reducers/form";

export type fromActionType = ReturnType<typeof setError> | ReturnType<typeof setSuccess> | ReturnType<typeof setSending>

const setError = (error: boolean) => {
  return{type:FORM_ERROR,error} as const
}
const setSuccess = (success: boolean) => {
  return{type:FORM_SUCCESS,success} as const
}
const setSending = (sending: boolean) => {
  return{type:FORM_SENDING,sending} as const
}
export type mailType = {
  name: string
  email: string
  phone: string
  message?: string
}

export const sendMail = (payload: mailType) => (dispatch: Dispatch) => {
  dispatch(setSending(true))
  sendMessage(payload).then(() => {
    dispatch(setSending(false))
    dispatch(setSuccess(true))
    setTimeout(() => {
      dispatch(setSuccess(false))
    }, 3000)
  }).catch(() => {
    dispatch(setSending(false))
    dispatch(setError(true))
    setTimeout(() => {
      dispatch(setError(false))
    }, 3000)
  })
}