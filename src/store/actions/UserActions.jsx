import { loaduser, removeuser } from "../reducers/UserSlice";
import { nanoid } from "@reduxjs/toolkit";


export const asyncregisteruser = (userData) => (dispatch) => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.username
 === userData.username
);
    if (userExists) {
      console.log("User with this email already exists.");
      return;
    }

    const newUser = { id: nanoid(), ...userData };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    const { password, ...userToStore } = newUser;
    localStorage.setItem("userToken", JSON.stringify(userToStore));
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (credentials) => (dispatch) => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.username === credentials.username);

    if (user && user.password === credentials.password) {
      const { password, ...userToStore } = user;
      localStorage.setItem("userToken", JSON.stringify(userToStore));
      dispatch(loaduser(userToStore));
    } else {
      console.log("Invalid email or password");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asynccurrentuser = () => (dispatch) => {
  try {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      dispatch(loaduser(JSON.parse(userToken)));
    }
  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutuser = () => (dispatch) => {
  try {
    localStorage.removeItem("userToken");
    dispatch(removeuser());
  } catch (error) {
    console.log(error);
  }
};
