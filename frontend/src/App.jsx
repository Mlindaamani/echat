import "./App.css";
import { RealTimeChat } from "./chats/RealTimeChat";
import { Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./pages/RegistrationForm";
import { LoginForm } from "./pages/LoginForm";
import { EchatLandingPage } from "./pages/LandingPage";
import { Profile } from "./pages/Profile";
import { AuthRequired } from "./components/AuthRequired";

export const App = () => {
  return (
    <Routes>
      <Route element={<AuthRequired />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<RealTimeChat />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Public routes */}
      <Route index element={<EchatLandingPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
