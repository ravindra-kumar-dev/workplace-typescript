import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environments";
import {
  AuthResponse,
} from "../auth/models/auth-response.model";
import { Observable } from "rxjs";
import { User }       from "../auth/models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService{

  constructor(private http: HttpClient) {}

  login(email: string, password: string) : Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
           ${environment.FIREBASE_API_KEY}`,{email, password, returnSecureToken: true})
  };

  public formatAuthResponse(authResponse: AuthResponse): User {
    const expiresIn: Date = new Date(new Date().getTime() + +authResponse.expiresIn * 1000);
    return new User(authResponse.localId,
      authResponse.email, authResponse.displayName,
      authResponse.idToken,
      authResponse.registered,
      authResponse.refreshToken,
      expiresIn
    );
  }
}

