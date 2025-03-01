import "bootstrap/dist/css/bootstrap.min.css";
import { authStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export const EchatLandingPage = () => {
  const { isAuthenticated, logout } = authStore();
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100 chat-app">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom p-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            eChat
          </a>
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
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>

              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/chat">
                      Chat
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/profile">
                      Profile
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => logout(navigate)}
                    >
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      Register
                    </a>
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
        <div className="mt-4">
          <a href="/" className="btn btn-light btn-lg me-3">
            Get Started
          </a>
          <a href="/" className="btn btn-outline-light btn-lg">
            Learn More
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>Real-Time Messaging</h3>
            <p>Chat instantly with friends, family, or colleagues.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Secure & Private</h3>
            <p>Your conversations are encrypted and safe.</p>
          </div>
          <div className="col-md-4 text-center">
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
