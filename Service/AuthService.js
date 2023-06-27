import { useSelector } from "react-redux";
import http from "../common/HttpCommon";

const loginUserAPI = (data) => {
  return http.post("login", data);
};

const RegisterUserAPI = (data) => {
  return http.post("register", data);
};

const GetUserAPI = (data) => {
  const get_token = localStorage.getItem("token");
  // const token = get_token["token"];
  console.log("service token", get_token);

  return http.get(`v1/user?id=${data}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${get_token}`,
    },
  });
};

const UpdateUserAPI = (data) => {
  const get_token = localStorage.getItem("token");
  // const token = get_token["token"];
  console.log("service token", get_token);

  return http.put("v1/user", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${get_token}`,
    },
  });
};

export { loginUserAPI, RegisterUserAPI, GetUserAPI, UpdateUserAPI };
