import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import DocumentViewPage from "./pages/DocumentViewPage";

const AppLayout = () => (
  <div className="flex flex-col min-h-screen">
    <AppHeader />
    <main className="flex-grow container mx-auto px-4 py-8">
      <Outlet />
    </main>
    <AppFooter />
  </div>
);

function App() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/documents/:id" element={<DocumentViewPage />} />
          {/* Redirect to dashboard for authenticated users */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;