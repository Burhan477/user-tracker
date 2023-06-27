import "../styles/globals.css";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "../Store/store";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "../common/ProtectedRoute";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLoggedIn = store.getState().data.isLoggedIn;

  useEffect(() => {
    console.log("looping");
    if (isLoggedIn === false) {
      router.push("/"); // Redirect to login page if not logged in
    }
  }, [isLoggedIn]);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
