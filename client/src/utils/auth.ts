// PURPOSE: client authentication middleware

// imports
import { jwtDecode as decode, JwtPayload } from "jwt-decode";

class AuthService {
  // get user data
  getProfile(): JwtPayload {
    return decode(this.getToken());
  }

  // check if user is logged in
  loggedIn(): boolean {
    // check if token exists
    const token: string = this.getToken();

    // return boolean token response and token expiration check
    return !!token && !this.isTokenExpired(token);
  }

  // check if token is expired
  isTokenExpired(token: string): boolean {
    try {
      // decode token
      const decoded: JwtPayload = decode(token);

      // if token is expired, return boolean
      if (decoded.exp && decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch {
      return false;
    }
  }

  // get token from local storage
  getToken(): string {
    return localStorage.getItem("id_token") || "";
  }

  // set token to local storage
  login(idToken: string): void {
    // save token to local storage
    localStorage.setItem("id_token", idToken);

    // reload page
    window.location.assign("/");
  }

  // remove token from local storage
  logout(): void {
    // remove token from local storage
    localStorage.removeItem("id_token");

    // reload page
    window.location.assign("/");
  }
}

export default new AuthService();
