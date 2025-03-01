import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100">
      <main className="container-fluid vw-100  overflow-x-hidden vh-100 auth-bg">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="text-center py-3 w-100 auth-bg">
        <p className="text-light fw-bold">&copy; 2025 eChat. All rights reserved.</p>
      </footer>
    </div>
  );
};
