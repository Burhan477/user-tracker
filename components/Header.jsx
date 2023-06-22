import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Index from "./index";
import Profile from "./Profile";

export default function Header() {
  //   const [navbar, setNavbar] = useState(false);
  //   const [open, setOpen] = useState(false);

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

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
          <div>
            <div className="flex-1 justify-self-center">
              <ul className="items-center justify-center">
                <li className="text-white">
                  <Link href="/profile">Profile</Link>
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
