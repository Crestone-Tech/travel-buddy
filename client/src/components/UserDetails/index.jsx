import React from "react";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
const UserDetails = () => {
  const [name, setName] = useState("");
  const { loading, data } = useQuery(QUERY_USER, { variables: { bar: name } });
  const handleFindUser = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <div className="login-container">
      <h2>User Details</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={handleFindUser} />
        </div>
        <button type="submit">Find User</button>
      </form>

      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={data.email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" value={data.password} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
