import { createContext, useContext, useEffect, useState } from "react";
import API from "../utils/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //first check user is already loggedin or not
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await API.get("/users/me");
        setUser(res.data.user);
        console.log(user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const register = async (formData) => {
    setError(null);
    try {
      const res = await API.post("/auth/register", formData);
      setUser(res.data);
      return res;
    } catch (err) {
      const message = err.response?.data?.message || "Registration failed";
      setError(message);
      setUser(null);
      throw message;
    }
  };

  const login = async (form) => {
    setError(null);
    try {
      const res = await API.post("/auth/login", form);
      setUser(res.data.data);
      return res;
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      setError(message);
      setUser(null);
      throw message;
    }
  };

  const logout = async () => {
    try {
      await API.post("/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const value = {
    user,
    isLoggedIn: !!user,
    error,
    loading,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ✅ Hook
export const useAuth = () => useContext(AuthContext);
