import { NavLink, useLocation } from "react-router-dom";

export const SidebarLink = ({ to, icon, text }) => {
  const location = useLocation();
  //Check if current route matches
  //const isActive = location.pathname.startsWith(to);

  //Handle nested routes
  const isActive =
    location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <NavLink
      to={to}
      end
      className={`btn btn-outline-light text-start w-100 ${
        isActive ? "active" : ""
      }`}
    >
      <i className={`bi ${icon} me-2`}></i>
      {text}
    </NavLink>
  );
};
