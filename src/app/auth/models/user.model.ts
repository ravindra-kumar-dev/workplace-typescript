export class User {
  constructor(private localId: string,
              private email: string,
              private displayName: string,
              private idToken: string,
              private registered: boolean,
              private refreshToken: string,
              private expiresIn: Date) {
  }
}
