// import React, { useState } from "react";
// import { Button, Form, Image } from "react-bootstrap";
// import { useAuthStore } from "../stores/authStore";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import chats from "../assets/svg/chats.svg";

// export const LoginForm = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { loading, login } = useAuthStore();

//   return (
//     <div>
//       <div className="d-flex justify-contents-center align-items-center vh-100 flex-column mt-5">
//         <Form
//           onSubmit={(e) => {
//             e.preventDefault();
//             login(email, password, navigate);
//           }}
//           className="mt-5 p-5 rounded-4 col-12 col-sm-9 col-md-11 col-lg-6 chat-app-color"
//         >
//           <div className="container d-flex justify-content-center align-items-center gap-4 mb-5">
//             <Image width={50} height={50} src={chats} />
//             <h5 className="text-center text-white fw-bold fs-4">LOGIN NOW</h5>
//           </div>
//           <Form.Group className="mb-4">
//             <Form.Label className="fs-5 fw-medium text-light">Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email..."
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-5">
//             <Form.Label className="fs-5 fw-medium text-light">
//               Password
//             </Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password..."
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-4">
//             <Button
//               className="w-100 text-light fw-bold fs-4"
//               type="submit"
//               disabled={loading}
//               variant="warning"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </Button>
//           </Form.Group>

//           <div className="text-center">
//             <span className="text-light fs-5 text-medium">
//               Don't have an account?{" "}
//             </span>{" "}
//             <Link
//               to={"/register"}
//               className="text-warning text-decoration-none fw-bold"
//             >
//               Register
//             </Link>
//           </div>
//         </Form>
//       </div>
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
import chats from "../assets/svg/chats.svg";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useAuthStore();

  return (
    <div className="w-100">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login(email, password, navigate);
        }}
        className="p-2 p-md-3 rounded-5"
      >
        <div className="text-center mb-4">
          <Image
            src={chats}
            fluid
            className="mb-3 bg-warning rounded-2"
            style={{ maxWidth: "80px" }}
          />
          <h2 className="h3 fw-bold text-dark">LOGIN NOW</h2>
        </div>

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
          {loading ? "Logging in..." : "Login"}
        </Button>

        <div className="text-center">
          <span className="text-muted">Don't have an account?</span>{" "}
          <Link
            to="/register"
            className="text-warning text-decoration-none fw-bold"
          >
            Register
          </Link>
        </div>
      </Form>
      <Toaster position="top-center" />
    </div>
  );
};
