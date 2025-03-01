import "./App.css";
import { RealTimeChat } from "./chats/RealTimeChat";
import { Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./pages/RegistrationForm";
import { LoginForm } from "./pages/LoginForm";
import { EchatLandingPage } from "./pages/LandingPage";
import { Profile } from "./pages/Profile";
import { AuthRequired } from "./components/AuthRequired";
import { AppLayout } from "./pages/layouts/AppLayout";
import { AuthLayout } from "./pages/layouts/AuthLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<EchatLandingPage />} />
        <Route element={<AuthRequired />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<RealTimeChat />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>

        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
};
