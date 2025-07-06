import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Kanban from "./pages/Kanban";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";

function App() {
  return (
    <div>
      <div>
        <Sidebar />
        <div className="ml-64 min-h-screen bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <div className="px-2 pb-2">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/tables" element={<Tables />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
