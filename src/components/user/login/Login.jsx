import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../../../services/user/userProfileService";
import LoginForm from "./LoginForm";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(credentials);
    if (result.success) {
      localStorage.setItem("token", result.token);
      login(result.user);
      navigate("/");
    } else {
      setError(result.error);
    }
  };

  return (
    <div>
      <LoginForm
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default Login;
