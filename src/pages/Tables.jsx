import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const sampleData = [
  { id: 1, name: "Suhani Mathur", email: "suhani@example.com", role: "Admin" },
  { id: 2, name: "Rohan Sharma", email: "rohan@example.com", role: "Manager" },
  { id: 3, name: "Anaya Singh", email: "anaya@example.com", role: "Developer" },
  { id: 4, name: "Kabir Khanna", email: "kabir@example.com", role: "Intern" },
];

const Tables = () => {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredData = sampleData
    .filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const valueA = (a[sortField] || "").toString().toLowerCase();
      const valueB = (b[sortField] || "").toString().toLowerCase();

      return sortAsc
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

  return (
    <div className="p-6 text-gray-900 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Users Data</h2>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow px-4 py-2 rounded-md border text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white"
        />
        <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">SORT BY</span>

        <div className="flex items-center border rounded-md overflow-hidden dark:border-gray-600 bg-white dark:bg-gray-800">
            <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="px-3 py-2 text-sm bg-transparent focus:outline-none dark:text-white"
            >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="role">Role</option>
            </select>

            <button
            onClick={() => setSortAsc(!sortAsc)}
            className="px-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            title="Toggle sort direction"
            >
            {sortAsc ? (
                <ChevronUpIcon className="h-4 w-4" />
            ) : (
                <ChevronDownIcon className="h-4 w-4" />
            )}
            </button>
        </div>
        </div>

      </div>

      <div className="overflow-auto bg-white dark:bg-gray-800 rounded shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="text-left px-4 py-2">#</th>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr
                key={user.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td
                  className="px-4 py-3 text-center text-gray-400"
                  colSpan="4"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
