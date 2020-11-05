import { put, call, all, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { PROBLEM2, PROBLEM3 } from "./types";

import {
  problem2Ready,
  problem2Wrong,
  problem3Ready,
  problem3Wrong,
} from "./action";

function* HoraConversion({ payload }) {
  try {
    const instance = yield call(() =>
      axios.post("http://localhost:8080/problem2/result", payload, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
    );
    yield put(problem2Ready(instance.data));
  } catch (error) {
    yield put(problem2Wrong(error));
  }
}

function* AccesLogin({ payload }) {
  try {
    const user = yield call(() =>
      axios.put(
        "https://dev.tuten.cl/TutenREST/rest/user/" +
          payload.email.replace("@", "%40"),
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            App: "APP_BCK",
            Accept: "application/json",
            Password: payload.password,
          },
        }
      )
    );
    const bookings = yield call(() =>
      axios.get(
        "https://dev.tuten.cl/TutenREST/rest/user/" +
          "contacto@tuten.cl".replace("@", "%40") +
          "/bookings",
        {
          params: {
            current: true,
          },
          headers: {
            "Content-Type": "application/json",
            App: "APP_BCK",
            Accept: "application/json",
            Token: user.data.sessionTokenBck,
            Adminemail: payload.email,
          },
        }
      )
    );
    console.log(bookings);
    const response = {
      token: user.data.sessionTokenBck,
      bookings: bookings.data,
    };

    yield put(problem3Ready(response));
  } catch (error) {
    yield put(problem3Wrong(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(PROBLEM2.Wait, HoraConversion),
    takeEvery(PROBLEM3.Wait, AccesLogin),
  ]);
}
