import { Users } from "lucide-react";
import Table from "../components/Table";

function Employees() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "department", label: "Department" },
    { key: "status", label: "Status" },
  ];

  const employeesData = [
    { name: "John Doe", email: "john@example.com", department: "Engineering", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", department: "Marketing", status: "Active" },
    { name: "Bob Wilson", email: "bob@example.com", department: "Sales", status: "Inactive" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Users size={24} className="text-[var(--primary-blue)]" />
        <h1 className="text-2xl font-semibold text-[var(--text-dark)]">Employees</h1>
      </div>
      <Table columns={columns} data={employeesData} />
    </div>
  );
}

export default Employees;