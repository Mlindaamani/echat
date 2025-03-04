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
import { PlaceholderBanner } from "./components/PlaceholderBanner";

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
          <Route
            path="/settings"
            element={
              <PlaceholderBanner
                title="Customization Station Under Construction!"
                description="We're building personalized settings to make eChat truly yours!"
                emoji="⚙️"
                ariaLabel="Settings section preview"
                footnote="[Feature development ongoing - check back next update]"
              />
            }
          />
          <Route
            path="/earnings"
            element={
              <PlaceholderBanner
                title="Earnings Dashboard Coming Soon!"
                description="We're crafting powerful financial insights to help you track your earnings!"
                emoji="💸"
                ariaLabel="Earnings section preview"
                footnote="[Development in progress - estimated launch Q4 2024]"
              />
            }
          />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/room" element={<Room />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
