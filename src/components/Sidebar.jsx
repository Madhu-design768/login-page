import { Home, Users, Building2, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar({ isOpen }) {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Employees", path: "/employees" },
    { icon: Building2, label: "Departments", path: "/departments" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const handleLogout = async () => {
    await logout();
  };

  return (
    <aside
      className={`
        ${isOpen ? "w-[250px]" : "w-20"} 
        h-screen bg-white border-r border-[var(--border-color)] 
        transition-all duration-300 hidden md:block
      `}
    >
      <nav className="pt-6">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-6 py-3 text-sm font-medium
                transition-colors duration-200
                ${isActive 
                  ? "text-[var(--primary-blue)] bg-blue-50 border-r-4 border-[var(--primary-blue)]" 
                  : "text-[var(--text-gray)] hover:bg-gray-50 hover:text-[var(--primary-blue)]"
                }
              `}
            >
              <item.icon size={20} />
              {isOpen && <span>{item.label}</span>}
            </Link>
          );
        })}
        
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-[var(--text-gray)] hover:bg-gray-50 hover:text-[var(--danger)] w-full mt-auto"
        >
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;