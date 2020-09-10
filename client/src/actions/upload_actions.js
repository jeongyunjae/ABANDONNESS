import Axios from "axios";
import { UPLOAD_IMAGES, UPLOAD_GALLERY } from "./types";

export function uploadImages(formData, config) {
  //파라미터로 받음
  const request = Axios.post("/api/gallery/image", formData, config).then(
    (response) => response.data
  );

  return {
    type: UPLOAD_IMAGES,
    payload: request,
  };
}

export function uploadGallery(dataToSubmit) {
  //파라미터로 받음
  const request = Axios.post("/api/gallery", dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: UPLOAD_GALLERY,
    payload: request,
  };
}
