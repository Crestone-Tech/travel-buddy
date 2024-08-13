import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";

import Auth from "../../utils/auth";

export default function Login() {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // GraphQL mutation
  const [loginUser] = useMutation(LOGIN_USER);

  const clearForm = () => {
    setFormErrorMessage("");
    setFormData({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormErrorMessage("");

    try {
      // login
      console.log("formData", formData);
      const { data } = await loginUser({
        variables: {
          username: formData.username.trim(),
          password: formData.password,
        },
      });
      console.log("data", data);
      const { user, token } = data?.loginUser || {};
      console.log("LOGIN_USER data: ", data);
      if (token) Auth.login(token);
    } catch (error) {
      if (error.message) {
        setFormErrorMessage(error.message);
        console.log("error:", error);
      }
    }
  };

  return (
    <div className="login-container relative min-h-screen flex justify-center px-12">
      <form onSubmit={handleFormSubmit} className="relative w-full mt-8 mb-8">
        <h2 className="text-4xl font-bold text-center">Login</h2>
        {formErrorMessage && (
          <div className="text-red-500 text-center">{formErrorMessage}</div>
        )}
        <label htmlFor="username" className="flex flex-col gap-2 w-full mb-4">
          <span className="text-sm font-bold">Username</span>
          <input
            className="w-full px-2 py-2 text-sm"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                username: event.target.value,
              }))
            }
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-2 w-full mb-4">
          <span className="text-sm font-bold">Password</span>
          <input
            className="w-full px-2 py-2 text-sm"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
            required
          />
        </label>
        <div className="flex flex-col gap-4 w-full">
          <button
            type="submit"
            className="bg-blue-950 text-white py-2 rounded-md"
          >
            Login
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="bg-gray-400 text-white py-2 rounded-md"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

// export default function Login() {
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             // value={username}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             // value={password}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
