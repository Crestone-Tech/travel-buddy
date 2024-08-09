import React from "react";

const Signup = () => {
    return (
      <div className="signup-container">
      <h2>Sign up</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            // value={firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            // value={lastName}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={password}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            // value={confirmPassword}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;