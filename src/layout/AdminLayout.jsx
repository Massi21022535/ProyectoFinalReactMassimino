import { Outlet } from "react-router-dom";
export const AdminLayout = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
