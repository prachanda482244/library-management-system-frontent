import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../config/AxiosInstance";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    const { data } = await forgotPassword({ email });
    console.log(data);
    if (data?.statusCode === 200) {
      setEmail("");
      navigate("/verify-password");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <p className="text-gray-600 text-center mb-4">
          Please enter your email address to reset your account.
        </p>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="example@example.com"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <p className="text-center text-gray-500 mt-4">
          Back to ?{" "}
          <Link to="/sign-in" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
