// import React, { useEffect, useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';

// const Calendar = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch events from your data source (e.g., an API)
//     const fetchedEvents = [
//       { title: 'Event 1', start: '2023-04-01', end: '2023-04-03' },
//       { title: 'Event 2', start: '2023-04-15', end: '2023-04-17' },
//       { title: 'Event 3', start: '2023-05-10', end: '2023-04-20' },
//     ];
//     setEvents(fetchedEvents);
//   }, []);

//   const handleEventClick = (info) => {
//     // Handle event click event
//     console.log('Event clicked:', info.event);
//   };

//   const eventClassNames = (info) => {
//     const today = new Date();
//     const eventStart = new Date(info.event.start);
    
//     if (eventStart < today) {
//       return 'past-day';
//     } else {
//       return '';
//     }
//   };

//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, interactionPlugin]}
//       initialView="dayGridMonth"
//       events={events}
//       eventClick={handleEventClick}
//       eventClassNames={eventClassNames}
//       nowIndicator
//       dayMaxEvents
//       height="auto"
//       className="bg-white w-[50vw] h-[50vh]" // Add Tailwind classes
//     />
//   );
// };

// export default Calendar;