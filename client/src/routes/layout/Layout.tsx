import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import "./layout.scss";
import { Navigate, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export function RequireAuth() {
  const authContext = useContext(AuthContext);
  const currentUser = authContext?.currentUser;

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
