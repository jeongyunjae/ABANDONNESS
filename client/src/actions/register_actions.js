import Axios from "axios";
import { REGISTER_USER } from "./types";

export function registerUser(dataTosubmit) {
  //파라미터로 받음
  const request = Axios.post("/api/users/register", dataTosubmit).then(
    (response) => response.data
  );

  return {
    type: REGISTER_USER,
    payload: request,
  };
}
