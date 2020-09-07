import { UPLOAD_IMAGES } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGES:
      return { ...state, uploadImages: action.payload };
    default:
      return state;
  }
}
