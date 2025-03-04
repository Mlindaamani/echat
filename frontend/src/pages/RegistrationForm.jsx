// import React, { useState } from "react";
// import { Button, Form, Image } from "react-bootstrap";
// import { useAuthStore } from "../stores/authStore";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import secure1 from "../assets/svg/secure1.svg";

// export const RegistrationForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();
//   const { loading, register } = useAuthStore();

//   return (
//     <div className="d-flex justify-contents-center align-items-center flex-column vh-100">
//       <Form
//         onSubmit={(e) => {
//           e.preventDefault();
//           register(username, email, password, navigate);
//         }}
//         className="mt-5 p-5 rounded-4 col-sm-9 col-md-11 col-lg-6 chat-app-color"
//       >
//         <div className="container d-flex justify-content-center align-items-center gap-4 mb-5">
//           <Image src={secure1} />
//           <h5 className="text-center text-white fw-bold fs-4">REGISTER NOW</h5>
//         </div>

//         <Form.Group className="mb-3">
//           <Form.Label className="fs-5 fw-medium text-light">
//             Username
//           </Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter username..."
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label className="fs-5 fw-medium text-light">Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email..."
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label className="fs-5 fw-medium text-light">
//             Password
//           </Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password..."
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-4 mt-4">
//           <Button
//             className="w-100 fw-bold fs-4 text-light"
//             type="submit"
//             disabled={loading}
//             variant="warning"
//           >
//             {loading ? "Registering..." : "Register"}
//           </Button>
//         </Form.Group>
//         <div className="text-center">
//           <span className="text-light fs-5 text-medium">
//             Already have an account?
//           </span>{" "}
//           <Link
//             to="/login"
//             className="text-warning text-decoration-none fw-bold"
//           >
//             Login
//           </Link>
//         </div>
//       </Form>
//       <Toaster />
//     </div>
//   );
// };

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
