import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { problem2Wait } from "../redux/action";

const Problem2 = ({ HoraConversion, data }) => {
  const [time, setTime] = useState("");
  const [timeZona, setTimeZona] = useState("");

  useEffect(() => {
    if (data != null) {
      setTime(data.time);
      setTimeZona(data.timezone);
    }
  }, [data]);

  const [hora, setHora] = useState("15:45:30");
  const [utc, setUtc] = useState("-3");

  return (
    <>
      <div className="bg-gray-200 p-4">
        <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2">
          <label>Time</label>
          <input
            placeholder="time"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            value={hora}
            onChange={(event) => setHora(event.target.value)}
          ></input>
          <label>Zone Time</label>
          <input
            placeholder="zone time"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            value={utc}
            onChange={(event) => setUtc(event.target.value)}
          ></input>
        </span>
        <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            onClick={() => {
              HoraConversion({ time: hora, timezone: Number(utc) });
            }}
          >
            Calculate
          </button>
        </span>
        <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">
          <label>Time</label>
          <input
            placeholder="time"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            value={time}
          ></input>
          <label>Time zone</label>
          <input
            placeholder="time zone"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            value={timeZona}
          ></input>
        </span>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.problem2Reducer.data,
});
const mapDispatchToProps = (dispatch) => {
  return {
    HoraConversion: (payload) => dispatch(problem2Wait(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Problem2);
