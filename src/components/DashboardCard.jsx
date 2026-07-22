import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function DashboardCard({ title, value, change, changeType, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--border-color)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[var(--text-gray)]">{title}</h3>
        {Icon && <Icon size={20} className="text-[var(--primary-blue)]" />}
      </div>
      <div className="text-2xl font-bold text-[var(--text-dark)] mb-2">{value}</div>
      {change && (
        <div className={`flex items-center text-xs ${changeType === 'increase' ? 'text-[var(--success)]' : 'text-[var(--danger)]'}`}>
          {changeType === 'increase' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span className="ml-1">{change} from last month</span>
        </div>
      )}
    </div>
  );
}

export default DashboardCard;