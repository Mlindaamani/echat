import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { DashboardHeader } from "../components/DashHeader";

export const DashboardLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-3 col-lg-2  text-white vh-100 p-0 overflow-auto"
          style={{ backgroundColor: "#2D4263" }}
        >
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

//#2D4263
//#2F2F2F
//#6A0572--magenta
//0047AB
//2D4263....dark blue
//1E3A2F....dark green
//3A2462
