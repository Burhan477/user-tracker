import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import ProtectedRoute from "../common/ProtectedRoute";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Slices/AuthSlice";
import Dashboard from "../components/Dashboard";

const Home = () => {
  // const router = useRouter();
  // const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  // const dispatch = useDispatch();

  // const Logout = () => {
  //   dispatch(logoutSuccess());
  //   router.replace("/"); // Redirect to login page if not logged in
  //   console.log("isLoggedIn", isLoggedIn);
  // };

  return (
    <>
      <ProtectedRoute>
        <div>
          {/* <button
            type="button"
            onClick={() => {
              Logout();
            }}
          >
            home
          </button> */}
          <Dashboard />
        </div>
      </ProtectedRoute>
    </>
  );
};

export default Home;
