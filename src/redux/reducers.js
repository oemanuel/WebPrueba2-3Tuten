import { PROBLEM2 } from "./types";

const initial = {
  data: null,
  error: null,
  wait: false,
};

export function problem2Reducer(state = initial, action) {
  switch (action.type) {
    case PROBLEM2.Wait:
      return {
        ...state,
        wait: true,
        error: null,
      };
    case PROBLEM2.Ready:
      return {
        ...state,
        wait: false,
        data: action.payload,
      };
    case PROBLEM2.Wrong:
      return {
        ...state,
        wait: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
      break;
  }
}
