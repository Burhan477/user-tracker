import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { viewProfile, UpdateProfile } from "../Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("firstname is required"),
  middelname: Yup.string().required("middelname is required"),
  lastname: Yup.string().required("lastname is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  phone: Yup.string().required("phone is required"),
  gender: Yup.string().required("gender is required"),
  dob: Yup.string().required("dob is required"),
  marritialStatus: Yup.string().required("marritialStatus is required"),
  address: Yup.string().required("address is required"),
  city: Yup.string().required("city is required"),
  state: Yup.string().required("state is required"),
  pincode: Yup.string().required("pincode is required"),
  qualification: Yup.string().required("qualification is required"),
  degree: Yup.string().required("degree is required"),
  passoutyear: Yup.string().required("passoutyear is required"),
  company: Yup.string().required("company is required"),
  jobtitile: Yup.string().required("jobtitile is required"),
  skill: Yup.string().required("skill is required"),
  summary: Yup.string().required("summary is required"),
  experiance: Yup.string().required("experiance is required"),
  // password: Yup.string()
  //   .required("Password is required")
  //   .min(6, "Password must be at least 6 characters"),
  // confirmPassword: Yup.string()
  //   .required("confirm Password is required")
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
  // acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

const Profile = ({ handleClose }) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formOptions = { resolver: yupResolver(validationSchema) };
  const UserId = useSelector((state) => state.data.user._id);
  const ProfileDetails = useSelector((state) => state.data.profile);

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  // console.log("ProfileDetails", ProfileDetails.email);
  const dispatch = useDispatch();
  const config = localStorage.getItem("user");
  useEffect(() => {
    dispatch(viewProfile(UserId));
  }, []);

  const router = useRouter();
  const onBack = () => {
    router.push("/home");
    console.log("goto back");
    //    console.log("formdata", formData);
    //    dispatch(loginUser(formData));
  };

  const onSubmit = () => {
    dispatch(UpdateProfile({ id: UserId, formData }));
    console.log("formdata", formData);
  };

  return (
    <>
      <div>
        <div
        // class="fixed top-0 left-0 right-0 z-50 w-full p-4  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div variant="contained" class="absolute w-full max-w-7xl max-h-full">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                  Personal Details
                </h3>
                <button
                  onClick={onBack}
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="extralarge-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="p-6 space-y-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="grid gap-6 mb-2 md:grid-cols-3">
                    <div>
                      <label
                        for="firstname"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        {...register("firstname")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.firstname}
                        // value={ProfileDetails.firstname}
                        type="text"
                        id="firstname"
                        name="firstname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="FirstName"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="middelname"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Middel name
                      </label>
                      <input
                        {...register("middelname")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.middelname}
                        type="text"
                        id="middelname"
                        name="middelname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Middel name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="lastname"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        {...register("lastname")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.lastname}
                        type="text"
                        id="lastname"
                        name="lastname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        {...register("email")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.email}
                        type="email"
                        id="email"
                        name="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="phone"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone number
                      </label>
                      <input
                        {...register("phone")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.phone}
                        type="tel"
                        id="phone"
                        name="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Phone Number"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>

                    {/* <div>
                      <label
                        for="website"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Website URL
                      </label>
                      <input
                       {...register("username")}
                      onChange={setFormData}
                        type="url"
                        id="website"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="flowbite.com"
                        required
                      />
                    </div> */}

                    <div>
                      <label
                        for="gender"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Gender
                      </label>
                      <input
                        {...register("gender")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.gender}
                        type="text"
                        id="gender"
                        name="gender"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Gender"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="dob"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date of Birth
                      </label>
                      <input
                        {...register("dob")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.dob}
                        type="date"
                        id="dob"
                        name="dob"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Date of Birth"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="marritialStatus"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Marritial Status
                      </label>
                      <input
                        {...register("marritialStatus")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.marritialStatus}
                        type="text"
                        id="marritialStatus"
                        name="marritialStatus"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Marritial Status"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="address"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address
                      </label>
                      <input
                        {...register("address")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.address}
                        type="text"
                        id="address"
                        name="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="city"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        {...register("city")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.city}
                        type="text"
                        id="city"
                        name="city"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="City"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="state"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        State
                      </label>
                      <input
                        {...register("state")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.state}
                        type="text"
                        id="state"
                        name="state"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="State"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="pincode"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pincode
                      </label>
                      <input
                        {...register("pincode")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.pincode}
                        type="text"
                        id="pincode"
                        name="pincode"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pincode"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                  </div>

                  {/* ------ */}
                  <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                      Education Details
                    </h3>
                  </div>

                  <div class="grid gap-6 mb-2 md:grid-cols-2">
                    <div>
                      <label
                        for="qualification"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Qualification
                      </label>
                      <input
                        {...register("qualification")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.qualification}
                        type="text"
                        id="qualification"
                        name="qualification"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Qualification"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="degree"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Degree
                      </label>
                      <input
                        {...register("degree")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.degree}
                        type="text"
                        id="degree"
                        name="degree"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Degree"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="passoutyear"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pass-out Year
                      </label>
                      <input
                        {...register("passoutyear")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.passoutyear}
                        type="text"
                        id="passoutyear"
                        name="passoutyear"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pass-out Year"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="company"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Company
                      </label>
                      <input
                        {...register("company")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.company}
                        type="text"
                        id="company"
                        name="company"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                        required
                      />
                    </div>
                  </div>

                  {/* ------ */}
                  <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                      Professional Details
                    </h3>
                  </div>

                  <div class="grid gap-6 mb-2 md:grid-cols-2">
                    <div>
                      <label
                        for="jobtitile"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Job Title
                      </label>
                      <input
                        {...register("jobtitile")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.jobtitile}
                        type="text"
                        id="jobtitile"
                        name="jobtitile"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Job Title"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Skill
                      </label>
                      <input
                        {...register("skill")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.skill}
                        type="text"
                        id="skill"
                        name="skill"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Skill"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Summary
                      </label>
                      <input
                        {...register("summary")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.summary}
                        type="text"
                        id="summary"
                        name="summary"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Summary"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Experiance
                      </label>
                      <input
                        {...register("experiance")}
                        onChange={setFormData}
                        defaultValue={ProfileDetails.experiance}
                        type="text"
                        id="experiance"
                        name="experiance"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Experiance"
                        required
                      />
                    </div>
                  </div>

                  {/* <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                      <input
                       {...register("username")}
                        // onChange={setFormData}
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        class="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div> */}

                  {/* <div class="grid gap-6 mb-2 md:grid-cols-2">
                    <div class="mb-6">
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        {...register("username")}
                        onChange={setFormData}
                        type="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        required
                      />
                    </div>

                    <div class="mb-6">
                      <label
                        for="confirm_password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        {...register("username")}
                        onChange={setFormData}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        required
                      />
                    </div>
                  </div> */}

                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
              {/* <!-- Modal footer --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
