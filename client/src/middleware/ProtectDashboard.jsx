import { Navigate, Outlet } from "react-router-dom";

const ProtectDashboard = () => {
  const userInfo = {
    name: "rezaul",
    role: "admin",
  };

  if (userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectDashboard;
