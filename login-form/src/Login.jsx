import { useState } from "react";
import './index.css'
import { FiAlertTriangle } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "") {
      setErrorMessage("Email is required");
      return;
    }
    if (password === "") {
      setErrorMessage("Password is required");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must at least be 8 characters");
      return;
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      setErrorMessage("Password must contain a special character");
      return;
    }

  };

  const handleSignUp = (event) => {
    event.preventDefault();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="content-container">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Sign In To Your Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <i
              className={`fas fa-eye absolute top-5 right-3 cursor-pointer ${
                showPassword ? "text-indigo-600" : "text-gray-400"
              }`}
              onClick={toggleShowPassword}
            ></i>
          </div>
          {errorMessage && (
            <div className="mb-4 text-sm text-red-600 flex gap-1 items-center"> <FiAlertTriangle /> {errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#FF8227] text-white py-2 px-4 rounded hover:bg-[#c56e30] "
          >
            Sign In
          </button>
          <div className="mt-4 text-sm text-[20px] flex gap-3">
            <p className="text-[20px]">Don't have an account?</p>
            <a
              href="/SignUp"
              onClick={handleSignUp}
              className="text-[#FF8227] hover:underline text-[20px]"
            >
              Create one now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;