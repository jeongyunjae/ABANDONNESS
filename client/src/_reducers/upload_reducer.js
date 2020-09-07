import { UPLOAD_IMAGES, UPLOAD_GALLARY } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case UPLOAD_IMAGES:
      return { ...state, uploadImages: action.payload };
    case UPLOAD_GALLARY:
      return { ...state, uploadGallary: action.payload };
    default:
      return state;
  }
}
