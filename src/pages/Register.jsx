import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const { loading, register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      toast.success("Register successful");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <label htmlFor="">Name</label> <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label> <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};
