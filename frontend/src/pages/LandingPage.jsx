import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { authStore } from "../stores/authStore";
import sound from "../assets/svg/sound.svg";
import chat from "../assets/svg/chat.svg";
import secure from "../assets/svg/secure.svg";
import socket from "../assets/svg/socket.svg";

export const EchatLandingPage = () => {
  const { isAuthenticated, logout } = authStore();
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100 chat-app">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom p-4">
        <div className="container-fluid">
          <Link
            className="navbar-brand d-flex gap-2 justify-content-center align-items-center"
            to="/"
          >
            <Image src={sound} />
            eChat
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Pricing
                </Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chat">
                      Chat
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#"
                      onClick={() => logout(navigate)}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center py-5 flex-grow-1 mt-5">
        <h1 className="display-3 fw-bold">Connect. Chat. Thrive.</h1>
        <p className="lead">
          Experience seamless real-time communication with eChat.
        </p>
        <div className="mt-5">
          <Link to="/" className="btn btn-light btn-lg me-3">
            Get Started
          </Link>
          <Link to="/" className="btn btn-outline-light btn-lg">
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5" id="feature">
        <div className="row">
          <div className="col-md-4 text-center">
            <Image src={chat} className="mb-3" style={{ width: "80px" }} />
            <h3>Real-Time Messaging</h3>
            <p>Chat instantly with friends, family, or colleagues.</p>
          </div>
          <div className="col-md-4 text-center">
            <Image src={secure} className="mb-3" style={{ width: "80px" }} />
            <h3>Secure & Private</h3>
            <p>Your conversations are encrypted and safe.</p>
          </div>
          <div className="col-md-4 text-center">
            <Image src={socket} className="mb-3" style={{ width: "80px" }} />
            <h3>Cross-Platform</h3>
            <p>Access eChat on any device, anywhere.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white text-center py-3">
        <p>&copy; 2025 eChat. All rights reserved.</p>
      </footer>
    </div>
  );
};
