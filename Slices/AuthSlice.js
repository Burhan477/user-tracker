import { createSlice } from "@reduxjs/toolkit";
import { loginUserAPI, RegisterUserAPI } from "../Service/AuthService";

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
      // state.user = action.payload;
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
    restoreState(state) {
      state.data = {};
      state.loading = false;
      state.successMsg = "";
      state.errorMsg = "";
    },
    setLoading(state) {
      state.loading = true;
    },
    removeLoading(state) {
      state.loading = false;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.errorMsg = "";
    },
    setProfile(state, action) {
      state.profile = action.payload;
      state.errorMsg = "";
    },
    setUserError(state, action) {
      state.errorMsg = action.payload;
    },
    setUserSuccess(state, action) {
      state.successMsg = action.payload;
    },
    removeUserError(state) {
      state.errorMsg = "";
    },
    removeMsg(state) {
      state.successMsg = "";
      state.errorMsg = "";
    },
    setSuccessTag(state, action) {
      state.errorMsg = "";
      state.successTag = action.payload;
    },
    setErrorTag(state, action) {
      state.successMsg = "";
      state.errorTag = action.payload;
    },
  },
});

export const loginUser = (data) => async (dispatch) => {
  // dispatch(setUser({ mess: 'mess' }))
  try {
    await loginUserAPI(data).then((res) => {
      dispatch(setUser(res.data.user));
      dispatch(loginSuccess());
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // window.location.replace('/Home')
    });
  } catch (error) {
    dispatch(setUserError(error));
  }
};

export const RegisterUser = (data) => async (dispatch) => {
  // dispatch(setUser({ mess: 'mess' }))
  try {
    await RegisterUserAPI(data).then((res) => {
      dispatch(setUser(res.data.data));
      // window.location.replace('/home')
      usen;
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
  restoreState,
  setLoading,
  removeLoading,
  setUser,
  setProfile,
  setUserError,
  setUserSuccess,
  removeUserError,
  removeMsg,
  setSuccessTag,
  setErrorTag,
} = authSlice.actions;

export default authSlice.reducer;
