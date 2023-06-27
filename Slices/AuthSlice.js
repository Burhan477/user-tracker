import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserAPI,
  RegisterUserAPI,
  GetUserAPI,
  UpdateUserAPI,
} from "../Service/AuthService";

const authSlice = createSlice({
  name: "data",
  initialState: {
    // Define your initial state here
    user: null,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      // state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    logoutSuccess: (state, action) => {
      console.log("in logout action");
      state.user = {};
      state.isLoggedIn = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    //--
    setUser(state, action) {
      state.user = action.payload;
      state.errorMsg = "";
    },
    setProfile(state, action) {
      state.profile = action.payload;
      state.errorMsg = "";
    },
    setUpdateProfile(state, action) {
      state.UpdateProfile = action.payload;
      state.errorMsg = "";
    },
    setUserError(state, action) {
      state.errorMsg = action.payload;
    },
  },
});

export const loginUser = (data) => async (dispatch) => {
  // dispatch(setUser({ mess: 'mess' }))
  try {
    await loginUserAPI(data).then((res) => {
      dispatch(setUser(res.data.user));
      dispatch(loginSuccess());
      localStorage.setItem("token", res.data.user.token);
    });
  } catch (error) {
    dispatch(setUserError(error));
  }
};

export const RegisterUser = (data) => async (dispatch) => {
  // dispatch(setUser({ mess: 'mess' }))
  try {
    await RegisterUserAPI(data).then((res) => {
      dispatch(setUser(res.data.user));
    });
  } catch (error) {
    dispatch(setUserError(error));
  }
};

export const viewProfile = (data) => async (dispatch) => {
  // dispatch(setUser({ mess: 'mess' }))
  try {
    // const token = JSON.parse(localStorage.getItem("user"));
    // console.log("token", token["token"]);
    await GetUserAPI(data).then((res) => {
      // dispatch(setUser(res.data.user));
      dispatch(setProfile(res.data.user));

      // window.location.replace('/home')
    });
  } catch (error) {
    dispatch(setUserError(error));
  }
};

export const UpdateProfile = (data) => async (dispatch) => {
  // dispatch(setUser({ mess: 'mess' }))
  try {
    // const token = JSON.parse(localStorage.getItem("user"));
    // console.log("token", token["token"]);
    await UpdateUserAPI(data).then((res) => {
      // dispatch(setUser(res.data.user));
      dispatch(setUpdateProfile(res.data.user));

      // window.location.replace('/home')
    });
  } catch (error) {
    dispatch(setUserError(error));
  }
};

export const {
  loginSuccess,
  logoutSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  setUser,
  setProfile,
  setUpdateProfile,
  setUserError,
} = authSlice.actions;

export default authSlice.reducer;
