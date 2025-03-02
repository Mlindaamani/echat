import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../components/NavigationBar";
import { Footer } from "../../components/Footer";

export const AppLayout = () => {
  return (
    <div className="d-flex flex-column">
      <NavigationBar />
      <main className="flex-grow-1 vh-100">
        <Outlet />
      </main>
      <Footer />;
    </div>
  );
};
