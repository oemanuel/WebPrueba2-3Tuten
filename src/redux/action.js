import { PROBLEM2, PROBLEM3 } from "./types";

export function problem2Wrong(payload) {
  return {
    type: PROBLEM2.Wrong,
    payload,
  };
}
export function problem2Wait(payload) {
  return {
    type: PROBLEM2.Wait,
    payload,
  };
}
export function problem2Ready(payload) {
  return {
    type: PROBLEM2.Ready,
    payload,
  };
}

export function problem3Wrong(payload) {
  return {
    type: PROBLEM3.Wrong,
    payload,
  };
}
export function problem3Wait(payload) {
  return {
    type: PROBLEM3.Wait,
    payload,
  };
}
export function problem3Ready(payload) {
  return {
    type: PROBLEM3.Ready,
    payload,
  };
}
