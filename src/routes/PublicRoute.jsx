import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const PublicRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
