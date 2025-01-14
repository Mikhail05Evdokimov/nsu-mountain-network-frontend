import { createAction } from "@reduxjs/toolkit";

export const authorizeUser = createAction("user/authorizeUser");
export const registerUser = createAction("user/registerUser");
export const fetchUserData = createAction("user/personalData");
