import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { authStore } from "../stores/authStore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = authStore();

  return (
    <div>
      <div className="d-flex justify-contents-center align-items-center vh-100 flex-column mt-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            login(email, password, navigate);
          }}
          className="mt-5 bg-success p-5 rounded-5 "
        >
          <h5 className="text-center mb-3 p-3 text-white fs-4 fw-bold">
            Login
          </h5>
          <Form.Group className="mb-4">
            <Form.Label className="fs-5 fw-medium text-light">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label className="fs-5 fw-medium text-light">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Button
              className="w-100 text-light fw-bold fs-4"
              type="submit"
              disabled={loading}
              variant="warning"
            >
              {loading ? "Lognging in..." : "Login"}
            </Button>
          </Form.Group>

          <div className="text-center">
            <span className="text-light fs-5 text-medium">
              Don't have an account?{" "}
            </span>{" "}
            <Link
              to={"/register"}
              className="text-warning text-decoration-none fw-bold"
            >
              Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
