import { authStore } from "../stores/authStore";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const AuthRequired = () => {
  const location = useLocation();
  const { isAuthenticated } = authStore();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};


// Response design
  /* <div className="col-12 col-md-8 col-lg-6 col-xl-5"></div> */





//....
// components/Sidebar.jsx
// import { SidebarLink } from './SidebarLink';

// const Sidebar = () => {
//   return (
//     <div className="p-3">
//       <div className="d-flex flex-column gap-2">
//         <h4 className="text-white mb-3">Navigation</h4>

//         <SidebarLink
//           to="/dashboard"
//           icon="bi-person"
//           text="Profile"
//         />

//         <SidebarLink
//           to="/chat"
//           icon="bi-chat"
//           text="Chat"
//         />

//         {/* Add more links as needed */}
//       </div>
//     </div>
//   );
// };





