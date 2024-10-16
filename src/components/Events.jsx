import React from 'react';

// Event List Component (Receives Props)
const EventList = (props) => {
  const { events } = props;  // Destructuring props
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          {event.name} - {event.date}  {/* Displaying event name and date */}
        </li>
      ))}
    </ul>
  );
};

const Events = () => {
  const eventsList = [
    { id: 1, name: 'Tech Fest', date: 'October 15, 2024' },
    { id: 2, name: 'Cultural Day', date: 'November 5, 2024' },
    { id: 3, name: 'Alumni Meet', date: 'December 20, 2024' },
  ];

  return (
    <div>
     
      <EventList events={eventsList} /> {/* Passing eventsList as props */}
    </div>
  );
};

export default Events;
