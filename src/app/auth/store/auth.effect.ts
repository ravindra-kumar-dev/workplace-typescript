import { Injectable } from "@angular/core";
import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";
import {
  loginStart,
  loginSuccess
} from "./auth.actions";
import {
  exhaustMap,
  map
}               from "rxjs";
import { User } from "../models/user.model";

@Injectable({providedIn: 'root'})

export class AuthEffect {

  constructor(private actions$: Actions,
              private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(ofType(loginStart), exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(map((data) => {
          const user: User = this.authService.formatAuthResponse(data);
          return loginSuccess({ user })
        }))
    }))
  })
}
