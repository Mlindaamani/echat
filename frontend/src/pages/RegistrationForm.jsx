import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { authStore } from "../stores/authStore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { loading, register } = authStore();

  return (
    <div>
      <div className="d-flex justify-contents-center align-items-center vh-100 flex-column mt-5 flex-wrap bg-white">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            register(username, email, password, navigate);
          }}
          className="mt-5 bg-success p-5 rounded-5"
        >
          <h5 className="text-center mb-1 p-5 text-white fw-bold fs-4">
            REGISTER NOW
          </h5>

          <Form.Group className="mb-3">
            <Form.Label className="fs-5 fw-medium text-light">
              Username
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fs-5 fw-medium text-light">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fs-5 fw-medium text-light">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4 mt-4">
            <Button
              className="w-100 fw-bold fs-4 text-light"
              type="submit"
              disabled={loading}
              variant="warning"
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </Form.Group>
          <div className="text-center">
            <span className="text-light fs-5 text-medium">
              Already have an account?
            </span>{" "}
            <Link
              to="/login"
              className="text-warning text-decoration-none fw-bold"
            >
              Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
