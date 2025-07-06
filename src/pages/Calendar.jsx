import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for clickable dates

const Calendar = () => {
  const handleDateClick = (arg) => {
    alert(`You clicked on ${arg.dateStr}`);
  };

  return (
    <div className="p-6 text-gray-900 dark:text-white">
        <h2 className="text-xl font-bold mb-4">Calendar</h2>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-gray-900 dark:text-white">
    
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={[
          { title: "Team Meeting", date: "2025-07-10" },
          { title: "UI Design Review", date: "2025-07-13" },
          { title: "Launch Deadline", date: "2025-07-18" },
        ]}
        height="auto"
      />
    </div>
    </div>
  );
};

export default Calendar;
