// components/ProtectedRoute.js

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);

  console.log("isLoggedIn", isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/"); // Redirect to login page if not logged in
      return null;
    }
  }, [isLoggedIn, router]);

  return children;
};

export default ProtectedRoute;
