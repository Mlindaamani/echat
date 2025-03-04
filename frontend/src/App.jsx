import { Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./pages/RegistrationForm";
import { Room } from "./pages/Room";
import { LoginForm } from "./pages/LoginForm";
import { LandingPage } from "./pages/LandingPage";
import { Analytics } from "./components/Analytics";
import { AuthRequired } from "./components/AuthRequired";
import { AppLayout } from "./layouts/AppLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { NotFoundPage } from "./pages/NotFound";
import { Settings } from "./pages/Settings";
import { Earnings } from "./pages/Earnings";

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Route>

      <Route element={<AuthRequired />}>
        <Route element={<DashboardLayout />}>
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/room" element={<Room />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
