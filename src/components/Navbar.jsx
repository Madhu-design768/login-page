import { Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar({ toggleSidebar }) {
  const { user } = useAuth();

  return (
    <header className="h-[60px] w-full bg-white flex justify-between items-center px-6 border-b border-[#e5e7eb] shadow-sm sticky top-0 left-0 z-[1000]">
      <div className="flex items-center gap-4.5">
        <button
          className="w-10 h-10 border-none rounded-lg bg-[#144667] text-white flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-[#0f3552]"
          onClick={toggleSidebar}
        >
          <Menu size={22} />
        </button>
        <div className="text-xl font-semibold text-[#144667]">Company</div>
      </div>

      <div className="flex items-center">
        <span className="text-base font-medium text-[#374151]">
          Welcome, {user?.name || "User"}
        </span>
      </div>
    </header>
  );
}

export default Navbar;