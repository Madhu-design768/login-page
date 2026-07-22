import { Building2 } from "lucide-react";

function Departments() {
  const departments = [
    { name: "Engineering", employees: 12, color: "bg-blue-600" },
    { name: "Marketing", employees: 8, color: "bg-green-600" },
    { name: "Sales", employees: 15, color: "bg-purple-600" },
    { name: "HR", employees: 4, color: "bg-pink-600" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Building2 size={24} className="text-[var(--primary-blue)]" />
        <h1 className="text-2xl font-semibold text-[var(--text-dark)]">Departments</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="bg-white rounded-xl p-6 shadow-sm border border-[var(--border-color)]"
          >
            <div className={`w-12 h-12 ${dept.color} rounded-lg mb-4`}></div>
            <h3 className="font-semibold text-[var(--text-dark)] mb-2">{dept.name}</h3>
            <p className="text-sm text-[var(--text-gray)]">{dept.employees} employees</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;