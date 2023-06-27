import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 20000, // request timeout
});

// request interceptor
instance.interceptors.request.use(
  (config) => {
    if (config.url !== "login" && config.headers) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    console.log("config", config);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // console.log(error,'instance error')
    // Do something with request error
    return Promise.reject(error);
  }
);
export default instance;
