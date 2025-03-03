import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="container-fluid chat-dash ">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="d-flex gap-3 justify-content-center mt-5">
          <Link to="/login" className="link-secondary text-decoration-none">
            Login
          </Link>
          <span className="text-muted">|</span>
          <Link to="/register" className="link-secondary text-decoration-none">
            Register
          </Link>
        </div>
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
