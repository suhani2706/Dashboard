import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

const areaData = [
  { month: "Jan", visits: 2400 },
  { month: "Feb", visits: 1398 },
  { month: "Mar", visits: 9800 },
  { month: "Apr", visits: 3908 },
  { month: "May", visits: 4800 },
];

const barData = [
  { month: "Jan", signups: 400 },
  { month: "Feb", signups: 300 },
  { month: "Mar", signups: 200 },
  { month: "Apr", signups: 278 },
  { month: "May", signups: 189 },
];

const Charts = () => {
  return (
    <div className="p-6 text-gray-900 dark:text-white">
      <h2 className="text-xl font-bold mb-6">Charts</h2>

      {/* Area Chart */}
      <div className="w-full h-64 mb-10 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Website Visits (Area Chart)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={areaData}>
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="visits" stroke="#3b82f6" fillOpacity={1} fill="url(#colorVisits)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Monthly Signups (Bar Chart)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="signups" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
