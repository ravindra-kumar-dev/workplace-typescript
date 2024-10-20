import {
  createReducer,
  on
} from "@ngrx/store";
import {
  AuthState,
  initialAuthState
} from "./auth.state";
import { loginSuccess } from "./auth.actions";

const _authReducer = createReducer(initialAuthState,
      on(loginSuccess, (state: AuthState, action)=> {
        return {
          ...state,
          user: action.user
        }
      })
  );

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
