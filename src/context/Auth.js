import { createContext, useEffect, useReducer } from "react";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from "./constants/index.js";

const inicial_state = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(inicial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        user: null,
        loading: true,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case USER_LOGIN_FAIL:
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case USER_REGISTER_SUCCESS:
      return {
        user: null,
        loading: false,
        error: null,
      };

    case USER_LOGOUT:
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, inicial_state);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
