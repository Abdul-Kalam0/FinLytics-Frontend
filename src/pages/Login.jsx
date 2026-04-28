import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(form);
      navigate("/dashboard");
      toast.success("Login successful");
    } catch (error) {
      toast.error(error);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={form.email}
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
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </>
  );
};
