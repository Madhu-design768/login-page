function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-xl shadow-sm border border-[var(--border-color)]">
        <thead className="bg-gray-50 border-b border-[var(--border-color)]">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-4 text-left text-xs font-semibold text-[var(--text-dark)] uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border-color)]">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 text-sm text-[var(--text-gray)]"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;