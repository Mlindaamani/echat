import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import { useAuthStore } from "../stores/authStore";
import avatar from "../assets/svg/avatar.svg";
import toggler from "../assets/svg/toggler.svg";
import logoutGray from "../assets/svg/logout.svg";

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const { user } = useAuthStore();
  const location = useLocation();

  return (
    <header className="bg-light-subtle border-bottom d-flex justify-content-between align-items-center p-3">
      <div className="d-flex align-items-center">
        <img src={toggler} alt="Toggle Sidebar" className="me-3" />
        <small className="mb-0 text-secondary">{location.pathname}</small>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Image
          // src={user?.photo ? user.photo : avatar}
          src={user?.photo ? user.photo : avatar}
          roundedCircle
          fluid
          width={50}
          height={50}
          className="me-2"
        />
        <Button
          onClick={() => logout(navigate)}
          variant="secondary"
          className="d-flex justify-content-between align-items-center gap-2 btn-sm"
        >
          <Image src={logoutGray} />
          Logout
        </Button>
      </div>
    </header>
  );
};
