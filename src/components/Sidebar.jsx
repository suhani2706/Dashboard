import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Dashboard", path: "/", icon: <HomeIcon className="h-5 w-5" /> },
  { name: "Calendar", path: "/calendar", icon: <CalendarIcon className="h-5 w-5" /> },
  { name: "Kanban", path: "/kanban", icon: <ClipboardDocumentListIcon className="h-5 w-5" /> },
  { name: "Charts", path: "/charts", icon: <ChartBarIcon className="h-5 w-5" /> },
  { name: "Tables", path: "/tables", icon: <TableCellsIcon className="h-5 w-5" /> },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-100 dark:bg-gray-900 border-r dark:border-gray-700 p-5 flex flex-col">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      </div>
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              }`
            }
          >
            {link.icon}
            <span className="text-sm font-medium">{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
