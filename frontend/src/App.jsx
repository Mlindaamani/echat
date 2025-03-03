import { Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./pages/RegistrationForm";
import { LoginForm } from "./pages/LoginForm";
import { LandingPage } from "./pages/LandingPage";
import { AuthRequired } from "./components/AuthRequired";
import { Settings } from "./pages/Settings";
import { Room } from "./pages/Room";
import { AppLayout } from "./pages/layouts/AppLayout";
import { AuthLayout } from "./pages/layouts/AuthLayout";
import { DashboardLayout } from "./pages/layouts/DashboardLayout";
import { Loading } from "./components/Loading";
import { Analytics } from "./components/Analytics";

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
          <Route path="/balance" element={<Loading />} />
          <Route path="/room" element={<Room />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
