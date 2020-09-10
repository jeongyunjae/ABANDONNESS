import { UPLOAD_IMAGES, UPLOAD_GALLERY } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case UPLOAD_IMAGES:
      return { ...state, uploadImages: action.payload };
    case UPLOAD_GALLERY:
      return { ...state, uploadGallery: action.payload };
    default:
      return state;
  }
}
