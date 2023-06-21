import http from "../common/HttpCommon";

const loginUserAPI = (data) => {
  return http.post("login", data);
};
const RegisterUserAPI = (data) => {
  return http.post("register", data);
};

export { loginUserAPI, RegisterUserAPI };
