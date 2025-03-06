import { SidebarLink } from "./SidebarLinks";
import { Brand } from "./Brand";
import analy from "../assets/svg/analy.svg";
import settings from "../assets/svg/settings.svg";
import balance from "../assets/svg/balance.svg";
import person from "../assets/svg/person.svg";
import profile from "../assets/svg/profile.svg";
export const Sidebar = () => (
  <div className="p-3">
    <div className="d-flex flex-column gap-2">
      <Brand />
      <SidebarLink to="/analytics" icon={analy} text="Analytics" />
      <SidebarLink to="/earnings" icon={balance} text="Earnings" />
      <SidebarLink to="/room" icon={person} text="Room" />
      <SidebarLink to="/profile" icon={profile} text="Profile" />
      <SidebarLink to="/settings" icon={settings} text="Settings" />
    </div>
  </div>
);
