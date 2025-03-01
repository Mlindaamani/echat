import { Outlet } from "react-router-dom";
import "../../App.css";

export const AppLayout = () => {
  return (
    <div className="d-flex flex-column">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
