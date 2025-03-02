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
import { DashboardLayout } from "./pages/layouts/DashboardLayout";
import { Loading } from "./components/Loading";

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<EchatLandingPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Route>

      <Route element={<AuthRequired />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<RealTimeChat />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<RealTimeChat />} />
          <Route
            path="/account"
            element={<h1 className="text-center">Realtime Saas App</h1>}
          />
          <Route path="/loading" element={<Loading />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
