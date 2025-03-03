import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { DashboardHeader } from "../../components/DashHeader";

export const DashboardLayout = () => {
  return (
    <div className="container-fluid bg-white">
      <div className="row">
        <div className="col-md-3 col-lg-2 chat-dash text-white vh-100 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 col-lg-10 p-0 bg-white">
          <div className="d-flex flex-column vh-100">
            <DashboardHeader />
            <div className="flex-grow-1 overflow-auto p-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
