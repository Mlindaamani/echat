import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useAuthStore } from "../stores/authStore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import secure1 from "../assets/svg/secure1.svg";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { loading, register } = useAuthStore();

  return (
    <div className="w-100">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          register(username, email, password, navigate);
        }}
        className="p-2 p-md-3 rounded-5"
      >
        <div className="text-center mb-4">
          <Image
            src={secure1}
            fluid
            className="mb-3 bg-warning rounded-2 "
            style={{ maxWidth: "100px" }}
          />
          <h2 className="h3 fw-bold text-dark">REGISTER NOW</h2>
        </div>

        <Form.Group className="mb-3">
          <Form.Label className="text-dark">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-dark">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="text-dark">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          className="w-100 py-2 fw-bold mb-3"
          type="submit"
          disabled={loading}
          variant="warning"
        >
          {loading ? "Registering..." : "Register"}
        </Button>

        <div className="text-center">
          <span className="text-muted">Already have an account?</span>{" "}
          <Link
            to="/login"
            className="text-warning text-decoration-none fw-bold"
          >
            Login
          </Link>
        </div>
      </Form>
      <Toaster position="top-center" />
    </div>
  );
};
