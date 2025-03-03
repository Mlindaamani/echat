import { Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./pages/RegistrationForm";
import { Room } from "./pages/Room";
import { LoginForm } from "./pages/LoginForm";
import { Settings } from "./pages/Settings";
import { LandingPage } from "./pages/LandingPage";
import { Analytics } from "./components/Analytics";
import { AuthRequired } from "./components/AuthRequired";
import { AppLayout } from "./layouts/AppLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { NotImplemented } from "./components/NotImplemented";

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
          <Route path="/settings" element={<Settings />} />
          <Route path="/balance" element={<NotImplemented />} />
          <Route path="/room" element={<Room />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
