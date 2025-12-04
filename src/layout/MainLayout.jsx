import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";

export const MainLayout = () => {
  return (
    <div className="app-container">
      <Nav />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
