import { Outlet } from "react-router-dom";
import secure from "../../assets/svg/secure.svg";
import { Image } from "react-bootstrap";
import { SidebarLink } from "../../components/SidebarLinks";

export const DashboardLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-3 col-lg-2 bg-success text-white vh-100 p-0">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 col-lg-10 p-0">
          <div className="d-flex flex-column" style={{ height: "100vh" }}>
            {/* Chat Header */}
            <header className="bg-light border-bottom p-3">
              <h2 className="mb-0">Chat Room</h2>
            </header>

            {/* Dynamic Content Area */}
            <div className="flex-grow-1 overflow-auto p-3">
              <Outlet />
            </div>

            {/* Message Input */}
            <div className="bg-light border-top p-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                />
                <button className="btn btn-primary">
                  <Image src={secure} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="p-3">
    <div className="d-flex flex-column gap-2">
      <h4 className="text-white mb-3">Mlinda</h4>
      <SidebarLink to="/dashboard" icon="bi-chat" text="Dashboard" />
      <SidebarLink to="/account" icon="bi-person" text="Account" />
      <SidebarLink to="/loading" icon="bi-person" text="Loading" />
      <SidebarLink to="/" icon="bi-person" text="Home" />
      <SidebarLink to="#" icon="bi-person" text="Logout" />

      <div className="mt-4">
        <h5 className="text-light">My Clients</h5>
        <hr />
        <div className="list-group">
          {/* Online users list would go here */}
          <p>Mlinda</p>
        </div>
      </div>
    </div>
  </div>
);
