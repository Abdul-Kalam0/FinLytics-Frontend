import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const Navbar = () => {
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout successful");
      navigate("/");
    } catch (error) {
      toast.error("Error in logout");
    }
  };
  return (
    <>
      <nav>
        {!isLoggedIn ? (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </>
  );
};
