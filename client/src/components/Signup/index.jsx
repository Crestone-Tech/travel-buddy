import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { redirect } from "react-router-dom";

import Auth from "../../utils/auth";

import beach from "../../assets/images/beach.jpg";

export default function Signup() {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // GraphQL mutation
  const [addUser] = useMutation(ADD_USER);

  const clearForm = () => {
    setFormErrorMessage("");
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormErrorMessage("");

    // check if username is alphanumeric
    if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
      return setFormErrorMessage("Username must be alphanumeric...");
    }

    // check if password is at least 6 characters long
    if (formData.password.length < 6) {
      return setFormErrorMessage(
        "Password must be at least 6 characters long..."
      );
    }

    // check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      return setFormErrorMessage("Passwords do not match...");
    }

    try {
      // signup
      const { data } = await addUser({
        variables: {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          username: formData.username.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        },
      });

      console.log("ADD_USER data:", data);
      Auth.login(data.addUser.token);

      return redirect("/");
    } catch (error) {
      if (error.essage) {
        setFormErrorMessage(error.message);
        console.error("error:", error);
      }
    }
  };

  return (
    <div className="signup-container relative min-h-screen flex items-center justify-center bg-cover bg-center">
      <img
        src={beach}
        alt="Beach"
        className="absolute inset-0 z-0 object-cover"
      />
      <form
        onSubmit={handleFormSubmit}
        className="relative w-full max-w-md bg-white pt-12 pb-12 px-12 p-8 rounded-md shadow-lg"
      >
        <h2 className="text-4xl font-bold text-center">Sign up</h2>
        {formErrorMessage && (
          <div className="text-red-500 text-center">{formErrorMessage}</div>
        )}
        <label htmlFor="firstName" className="flex flex-col gap-2 w-full mb-4">
          <span className="text-sm font-bold">First Name</span>
          <input
            className="w-full px-2 py-2 text-sm border border-gray-300 rounded"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                firstName: event.target.value,
              }))
            }
            required
          />
        </label>
        <label htmlFor="lastName" className="flex flex-col gap-2 w-full mb-4">
          <span className="text-sm font-bold">Last Name</span>
          <input
            className="w-full px-2 py-2 text-sm border border-gray-300 rounded"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                lastName: event.target.value,
              }))
            }
            required
          />
        </label>
        <label htmlFor="username" className="flex flex-col gap-2 w-full mb-4">
          <span className="text-sm font-bold">Username</span>
          <input
            className="w-full px-2 py-2 text-sm border border-gray-300 rounded"
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
        <label htmlFor="email" className="flex flex-col gap-2 w-full mb-4">
          <span className="text-sm font-bold">Email</span>
          <input
            className="w-full px-2 py-2 text-sm border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-2 w-full mb-4">
          <span className="text-sm font-bold">Password</span>
          <input
            className="w-full px-2 py-2 text-sm border border-gray-300 rounded"
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
        <label
          htmlFor="confirmPassword"
          className="flex flex-col gap-2 w-full mb-4"
        >
          <span className="text-sm font-bold">Confirm Password</span>
          <input
            className="w-full px-2 py-2 text-sm border border-gray-300 rounded"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: event.target.value,
              }))
            }
            required
          />
        </label>
        <div className="pb-2">
          Already have an account? Login{" "}
          <a href="/login" className="text-blue-800 underline">
            here
          </a>
        </div>
        <div className="flex flex-row gap-2 w-full">
          <button
            type="submit"
            className="bg-blue-950 text-white w-1/2 py-2 rounded-md"
          >
            Sign up
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="bg-gray-400 text-white w-1/2 py-2 rounded-md"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

// const Signup = () => {
//   return (
//     <div className="signup-container">
//       <h2>Sign up</h2>
//       <form>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             // value={firstName}
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             // value={lastName}
//           />
//         </div>
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
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             // value={confirmPassword}
//           />
//         </div>
//         <button type="submit">Sign up</button>
//       </form>
//     </div>
//   );
// };
