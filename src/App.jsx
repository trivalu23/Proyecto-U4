import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  // 🌙 Estado del modo oscuro
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🌙 Aplica clase dark al <html> y guarda en localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
          <Header isDark={isDark} setIsDark={setIsDark} />
          <main className="flex-grow transition-colors duration-500">
            <Outlet />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
