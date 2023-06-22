import React, { useReducer } from "react";
import Link from "next/link";
import { RegisterUser } from "../Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
// import { useAppDispatch } from '../Store/Hooks';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  // firstName: Yup.string().required("First Name is required"),
  // lastName: Yup.string().required("Last name is required"),
  // dob: Yup.string()
  //   .required("Date of Birth is required")
  //   .matches(
  //     /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
  //     "Date of Birth must be a valid date in the format YYYY-MM-DD"
  //   ),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  // acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

const Register = ({ type, setType }) => {
  const formOptions = { resolver: yupResolver(validationSchema) };
  const [formData, setFormData] = useReducer(formReducer, {});
  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = () => {
    // e.preventDefault();
    dispatch(RegisterUser(formData));
    router.push("/home");
    console.log("formdata", formData);
  };

  return (
    <>
      <div>
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 rounded-md shadow-md lg:max-w-xl bg-green-300">
            <h1 className="text-3xl font-bold text-center text-gray-700">
              Register
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Username
                </label>
                <input
                  {...register("username")}
                  className={`form-control block w-full 
                  px-4 py-2 mt-2 text-gray-700 
                  bg-white border rounded-md 
                  focus:border-gray-400
                  focus:ring-gray-300 
                  focus:outline-none focus:ring 
                  focus:ring-opacity-40 ${errors.username ? "is-invalid" : ""}`}
                  type="text"
                  onChange={setFormData}
                  name="username"
                  // className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="invalid-feedback" style={{ direction: "rtl" }}>
                  {errors.username?.message}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  className={`form-control block w-full 
                  px-4 py-2 mt-2 text-gray-700
                  bg-white border rounded-md 
                  focus:border-gray-400
                  focus:ring-gray-300 
                  focus:outline-none 
                  focus:ring focus:ring-opacity-40 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  type="email"
                  onChange={setFormData}
                  name="email"
                />
                <div className="invalid-feedback" style={{ direction: "rtl" }}>
                  {errors.email?.message}
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  className={`form-control block w-full 
                  px-4 py-2 mt-2 text-gray-700 
                  bg-white border rounded-md 
                  focus:border-gray-400
                  focus:ring-gray-300 
                  focus:outline-none focus:ring 
                  focus:ring-opacity-40${errors.password ? "is-invalid" : ""}`}
                  onChange={setFormData}
                  name="password"
                  type="password"
                />
                <div className="invalid-feedback" style={{ direction: "rtl" }}>
                  {errors.password?.message}
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword")}
                  className={`form-control form-control block w-full 
                  px-4 py-2 mt-2 text-gray-700
                  bg-white border rounded-md 
                  focus:border-gray-400
                  focus:ring-gray-300 
                  focus:outline-none 
                  focus:ring focus:ring-opacity-40${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  type="password"
                  onChange={setFormData}
                  name="confirmPassword"
                />
                <div className="invalid-feedback" style={{ direction: "rtl" }}>
                  {errors.confirmPassword?.message}
                </div>
              </div>

              <div className="form-group form-check">
                <input
                  name="acceptTerms"
                  type="checkbox"
                  {...register("acceptTerms")}
                  id="acceptTerms"
                  className={`form-check-input ${
                    errors.acceptTerms ? "is-invalid" : ""
                  }`}
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  Accept Terms & Conditions
                </label>
                <div className="invalid-feedback">
                  {errors.acceptTerms?.message}
                </div>
              </div>

              <div className="mt-2">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Register
                </button>
              </div>
            </form>

            <p className="mt-4 text-sm text-center text-gray-700">
              Already have an account?{" "}
              {/* <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign-In
              </Link> */}
              <button
                type="button"
                onClick={() => setType(type === "Login" ? "Register" : "Login")}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
