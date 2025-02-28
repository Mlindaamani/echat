import "./App.css";
import { RealTimeChat } from "./chats/RealTimeChat";
import { Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./pages/RegistrationForm";
import { LoginForm } from "./pages/LoginForm";
import { EchatLandingPage } from "./pages/LandingPage";

export const App = () => {
  return (
    <Routes>
      <Route index element={<EchatLandingPage />} />
      <Route path="/chat" element={<RealTimeChat />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
