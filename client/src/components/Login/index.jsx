import React from "react";

const Login = () => {
    return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;