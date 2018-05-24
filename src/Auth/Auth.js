import history from "../history";
import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    // the following three lines MUST be updated
    domain: "bkrebs.auth0.com",
    audience: "https://bkrebs.auth0.com/userinfo",
    clientID: "3co4Cdt3h3x8En7Cj0s7Zg5FxhKOjeeK",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token",
    scope: "openid"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.setSession(authResult);
        history.replace("/home");
      } else if (err) {
        history.replace("/home");
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
    history.replace("/home");
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    // Clear access token and expiration from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    // navigate to the home route
    history.replace("/home");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
