import axios from "axios";
import { mailType } from "./redux/actions/form";

export const sendMessage = (payload: mailType) => {
  return axios.post("https://serversmtp.herokuapp.com/sendMessage", payload)
}