import { Settings as SettingsIcon, User, Bell, Shield } from "lucide-react";

function Settings() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <SettingsIcon size={24} className="text-[var(--primary-blue)]" />
        <h1 className="text-2xl font-semibold text-[var(--text-dark)]">Settings</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-[var(--border-color)] p-6">
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[var(--text-gray)] rounded-lg hover:bg-gray-50 hover:text-[var(--primary-blue)]">
            <User size={18} />
            <span>Profile Settings</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[var(--text-gray)] rounded-lg hover:bg-gray-50 hover:text-[var(--primary-blue)]">
            <Bell size={18} />
            <span>Notifications</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[var(--text-gray)] rounded-lg hover:bg-gray-50 hover:text-[var(--primary-blue)]">
            <Shield size={18} />
            <span>Security</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Settings;