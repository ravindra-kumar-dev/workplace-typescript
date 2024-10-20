import {
  createAction,
  props
}               from "@ngrx/store";
import { User } from "../models/user.model";

export const LOGIN_START: string = "[auth page] login start";
export const LOGIN_SUCCESS: string = "[auth page] login success";
export const LOGIN_FAIL: string = "[auth page] login fail";

export const loginStart = createAction(LOGIN_START, props<{email: string, password: string}>());

export const loginSuccess = createAction(LOGIN_SUCCESS, props<{user: User}>());
