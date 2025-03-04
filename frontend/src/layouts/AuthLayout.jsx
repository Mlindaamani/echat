// import { Link, Outlet } from "react-router-dom";

// export const AuthLayout = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row justify-content-center min-vh-100 align-items-center">
//         <div className="d-flex gap-3 justify-content-center mt-5">
//           <Link to="/login" className="link-secondary text-decoration-none">
//             Login
//           </Link>
//           <span className="text-muted">|</span>
//           <Link to="/register" className="link-secondary text-decoration-none">
//             Register
//           </Link>
//         </div>
//         <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };


import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <div className="row justify-content-center align-items-center flex-grow-1">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          {/* Navigation Links */}
          <div className="d-flex justify-content-center gap-3 mb-4">
            <Link
              to="/login"
              className="link-secondary text-decoration-none fs-5"
            >
              Login
            </Link>
            <span className="text-muted">|</span>
            <Link
              to="/register"
              className="link-secondary text-decoration-none fs-5"
            >
              Register
            </Link>
          </div>

          {/* Form Container */}
          <div className="card shadow-lg p-3 p-md-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};