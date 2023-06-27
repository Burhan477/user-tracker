import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Index from "./index";
import Profile from "./Profile";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Slices/AuthSlice";

export default function Header() {
  //   const [navbar, setNavbar] = useState(false);
  //   const [open, setOpen] = useState(false);

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logoutSuccess());
    router.push("/"); // Redirect to login page if not logged in
    console.log("isLoggedIn", isLoggedIn);
  };

  return (
    <div>
      <nav className="w-full bg-gray-800 shadow">
        <div className="flex items-center justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex justify-between py-3">
              <a href="#">
                <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
              </a>
            </div>
          </div>
          <div className="flex p-1">
            <div className="flex justify-self-center">
              <ul className="items-center justify-center">
                <li className="text-white">
                  <Link href="/profile">Profile</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-self-center ml-3">
              <ul className="items-center justify-center">
                <li className="text-white">
                  <button
                    type="button"
                    onClick={() => {
                      Logout();
                    }}
                  >
                    log_out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <div>{open && <Profile open={open} handleClose={handleClose} />}</div> */}
    </div>
  );
}
