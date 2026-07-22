import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-[var(--text-dark)] mb-4">
              Dashboard
            </h1>
            <p className="text-[var(--text-gray)] mb-6">
              Welcome to your dashboard! You are successfully logged in.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;