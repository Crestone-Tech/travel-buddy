// PURPOSE: client authentication middleware

// imports
import decode from "jwt-decode";

class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user is logged in
  loggedIn() {
    // check if token exists
    const token = this.getToken();

    // return boolean token response and token expiration check
    return !!token && !this.isTokenExpired(token);
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      // decode token
      const decoded = decode(token);

      // if token is expired, return boolean
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch {
      return false;
    }
  }

  // get token from local storage
  getToken() {
    return localStorage.getItem("id_token");
  }

  // set token to local storage
  login(idToken) {
    // save token to local storage
    localStorage.setItem("id_token", idToken);

    // reload page
    window.location.assign("/");
  }

  // remove token from local storage
  logout() {
    // remove token from local storage
    localStorage.removeItem("id_token");

    // reload page
    window.location.assign("/");
  }
}

export default new AuthService();
