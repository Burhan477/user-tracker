import React, { useReducer } from "react";
import Link from "next/link";
// import { loginUser } from "../Slices/userSlice";
// import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Login = ({ type, setType }) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const router = useRouter();
  //   const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginUser(formData));
    router.push("/home");
    console.log("login formdata", formData);
  };

  return (
    <>
      <div>
        <div className="relative w-90 flex flex-col items-center justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 rounded-md shadow-md lg:max-w-xl bg-green-300">
            <h1 className="text-3xl font-bold text-center text-gray-700">
              Login
            </h1>
            <form onSubmit={handelSubmit} className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={setFormData}
                  name="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  onChange={setFormData}
                  name="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <Link
                href="/forget"
                className="text-xs text-blue-600 hover:underline"
              >
                Forget Password?
              </Link>
              <div className="mt-2">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Login
                </button>
              </div>
            </form>

            <p className="mt-4 text-sm text-center text-gray-700">
              Don`t have an account? &nbsp;
              {/* <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link> */}
              <button
                type="button"
                onClick={() => setType(type === "Login" ? "Register" : "Login")}
              >
                Sign-up
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
