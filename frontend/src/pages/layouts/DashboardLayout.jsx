import { Outlet, useLocation } from "react-router-dom";
import { SidebarLink } from "../../components/SidebarLinks";
import analy from "../../assets/svg/analy.svg";
import settings from "../../assets/svg/settings.svg";
import home from "../../assets/svg/home.svg";
import balance from "../../assets/svg/balance.svg";
import logout from "../../assets/svg/logout.svg";
import { Brand } from "../../components/Brand";

const Sidebar = () => (
  <div className="p-3">
    <div className="d-flex flex-column gap-2">
      <Brand />
      <SidebarLink to="/analytics" icon={analy} text="Analytics" />
      <SidebarLink to="/balance" icon={balance} text="Balance" />
      <SidebarLink to="/" icon={home} text="Home" />
      <SidebarLink to="/settings" icon={settings} text="Settings" />
      <div className="mt-4">
        <h5 className="text-secondary">Clients</h5>
        <div className="list-group">{/* clients...*/}</div>
      </div>
    </div>
  </div>
);

export const DashboardLayout = () => {
  const location = useLocation();
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-3 col-lg-2 bg-black text-white vh-100 p-0">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 col-lg-10 p-0 bg-white">
          <div className="d-flex flex-column vh-100">
            {/* Chat Header */}
            <header className="bg-light-subtle border-bottom p-3">
              <small className="mb-0 text-secondary">{location.pathname}</small>
            </header>

            {/* Dynamic Content Area */}
            <div className="flex-grow-1 overflow-auto p-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
