import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { problem3Wait } from "../redux/action";
import moment from "moment";

const Problem3 = ({ bookings, AccesLogin }) => {
  const [email, setEmail] = useState("testapis@tuten.cl");
  const [password, setPassword] = useState("1234");
  const app = "APP_BCK";
  const [book, setBook] = useState([]);
  useEffect(() => {
    setBook(bookings);
  }, [bookings]);

  const [id, setId] = useState("");

  useEffect(() => {
    if (bookings != null) {
      setBook(
        bookings.filter((item) => item.bookingId.toString().includes(id))
      );
      if (id == "") {
        setBook(bookings);
      }
    }
  }, [id]);

  const [price, setPrice] = useState("");
  const [filterr, setFilterr] = useState("");

  useEffect(() => {
    if (bookings != null) {
      switch (filterr) {
        case "=":
          setBook(
            bookings.filter((item) => item.bookingPrice.toString() === price)
          );
          break;
        case "<=":
          setBook(
            bookings.filter((item) => item.bookingPrice.toString() <= price)
          );
          break;
        case ">=":
          setBook(
            bookings.filter((item) => item.bookingPrice.toString() >= price)
          );
          break;
        default:
          setBook(bookings);
          break;
      }
      if (price == "") {
        setBook(bookings);
      }
    }
  }, [price, filterr]);

  return (
    <>
      <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="-mt-px">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              onClick={() =>
                AccesLogin({ email: email, password: password, app: app })
              }
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </div>
      </div>
      {book != null && (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <input
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                      placeholder="Booking Id"
                      type="number"
                      value={id}
                      onChange={(event) => setId(event.target.value)}
                    />
                    <input
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                      placeholder="Booking Price"
                      type="number"
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                    />
                    <div class="inline-flex">
                      <button
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                        onClick={() => setFilterr("=")}
                      >
                        {" = "}
                      </button>
                      <button
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={() => setFilterr(">=")}
                      >
                        {">="}
                      </button>
                      <button
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={() => setFilterr("<=")}
                      >
                        {"<="}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" items-center justify-center bg-gray-50 py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {book.map((item, index) => {
              console.log(item);
              return (
                <div className="max-w-sm rounded overflow-hidden shadow-lg  mb-4">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Booking</div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div className=" bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      BookingId: {item.bookingId}
                    </div>
                    <div className=" bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Cliente: {item.locationId.tutenUser.firstName}{" "}
                      {item.locationId.tutenUser.lastName}
                    </div>
                    <div className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Fecha de Creación:
                      {moment.unix(item.bookingTime).format("MM/DD/YY")}
                    </div>
                    <div className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Dirección: {item.locationId.streetAddress}
                    </div>
                    <div className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Precio: {item.bookingPrice}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  bookings: state.problem3Reducer.data,
});
const mapDispatchToProps = (dispatch) => {
  return {
    AccesLogin: (payload) => dispatch(problem3Wait(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Problem3);
