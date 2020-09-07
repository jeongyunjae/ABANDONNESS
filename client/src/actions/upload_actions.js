import Axios from "axios";
import { UPLOAD_IMAGES } from "./types";

export function uploadImages(formData, config) {
  //파라미터로 받음
  const request = Axios.post("/api/gallary/image", formData, config).then(
    (response) => response.data
  );

  return {
    type: UPLOAD_IMAGES,
    payload: request,
  };
}
