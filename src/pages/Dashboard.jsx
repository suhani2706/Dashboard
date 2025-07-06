import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import { ChartBarIcon, UserGroupIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const lineData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4000 },
  { month: 'May', revenue: 6000 },
];

const barData = [
  { name: 'Product A', sales: 3000 },
  { name: 'Product B', sales: 2000 },
  { name: 'Product C', sales: 2780 },
  { name: 'Product D', sales: 1890 },
];

const pieData = [
  { name: 'Mobile', value: 400 },
  { name: 'Laptop', value: 300 },
  { name: 'Accessories', value: 300 },
  { name: 'Smart Home', value: 200 },
];

const COLORS = ['#4ade80', '#60a5fa', '#facc15', '#f87171'];

const statCards = [
  {
    title: "Revenue",
    value: "$18,200",
    icon: <CurrencyDollarIcon className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Users",
    value: "1,250",
    icon: <UserGroupIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Orders",
    value: "320",
    icon: <ChartBarIcon className="h-6 w-6 text-yellow-500" />,
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 text-gray-900 dark:text-white space-y-12">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-1">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {statCards.map((card) => (
          <div key={card.title} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
              {card.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{card.title}</p>
              <h3 className="text-xl font-semibold">{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">📈 Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">📊 Product Sales</h2>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#10b981" />
        </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Pie Chart */}
      <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">🥧 Category Share</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
