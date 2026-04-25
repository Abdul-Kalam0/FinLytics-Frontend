import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navbar } from "../components/Navbar";

export const ProtectedRoute = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
