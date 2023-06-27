import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);

  useEffect(() => {
    console.log("looping");
    if (isLoggedIn === false) {
      router.push("/"); // Redirect to login page if not logged in
    }
  }, [isLoggedIn]);
};

export default ProtectedRoute;
