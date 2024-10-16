import React, { useState } from 'react'; 
import '../styles/Home.css';
import Event from './Events'; 
import Courses from './Courses'; 
import vesit1 from '../images/vesit1.jpg';
import Navbar from './Navbar';
import achievement1 from '../images/achievement1.jpg';
import achievement2 from '../images/achievement2.jpg';
import achievement3 from '../images/achievement3.jpg';
import achievement4 from '../images/achievement4.jpg';
import AlumniList from './AlumniList';

const Home = () => {
  const eventsList = [
    { id: 1, name: 'Tech Fest', date: 'October 15, 2024' },
    { id: 2, name: 'Cultural Day', date: 'November 5, 2024' },
    { id: 3, name: 'Alumni Meet', date: 'December 20, 2024' },
  ];

  const [notices, setNotices] = useState([
    { id: 1, title: 'Exam Schedule Announced', date: 'October 20, 2024' },
    { id: 3, title: 'Semester Break Notice', date: 'November 1, 2024' },
  ]);

  const [newNotice, setNewNotice] = useState({ title: '', date: '' });
  const [isAdmin, setIsAdmin] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotice((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNotice = () => {
    if (newNotice.title && newNotice.date) {
      setNotices((prev) => [
        ...prev,
        { id: prev.length + 1, title: newNotice.title, date: newNotice.date },
      ]);
      setNewNotice({ title: '', date: '' }); // Clear the input fields
    }
  };

  const handleAdminClick = () => {
    const password = prompt("Enter admin password:");
    if (password === "212727") {
      setIsAdmin(true); // Grant admin permissions
    } else {
      alert("Incorrect password!"); // Show error if password is wrong
    }
  };


  return (
    <div>
    <Navbar onAdminClick={handleAdminClick} />
    <div className="home">
      
      <div>
        <h1 align="center">Welcome to Vivekanand Education Society's Institute of Technology</h1>
        <p align="center">Providing Quality Education since 1984.</p>
      </div>

      {/* Image Section */}
      <div>
        <img className="img" src={vesit1} alt="VESIT Campus" /> {/* Added alt text */}
      </div>

      {/* About Us Section */}
      <div className="section">
        <h2>About Us</h2>
        <p>
          Vivekanand Education Society's Institute of Technology (VESIT) is a premier institute in Mumbai offering undergraduate and postgraduate courses in engineering.
        </p>
      </div>

      <div className="section">
  <h2>Important Notices</h2>
  <marquee>
    <ul className="notices-list">
      {notices.map((notice) => (
        <li key={notice.id}>
          <strong>{notice.title}</strong> - {notice.date}
        </li>
      ))}
    </ul>
  </marquee>
</div>

{isAdmin && (
          <div>
            <input
              type="text"
              name="title"
              placeholder="Notice Title"
              value={newNotice.title}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="date"
              value={newNotice.date}
              onChange={handleInputChange}
            />
            <button onClick={handleAddNotice}>Add Notice</button>
          </div>
        )}

      {/* Courses Section */}
      <div className="section">
        <h2>Engineering Courses</h2>
        <Courses />
      </div>

      <div className="section">
        <h2>Upcoming Events</h2>
        <ul className="events-list">
          {eventsList.map((event) => (
            <li key={event.id}>
              {event.name} - {event.date}
            </li>
          ))}
        </ul>
      </div> 
    </div>
    <div className="section achievements">
        <h2>Achievements</h2>
        <div className="achievements-container">
          <img src={achievement1} alt="Achievement 1" className="achievement-image" />
          <img src={achievement2} alt="Achievement 2" className="achievement-image" />
          <img src={achievement3} alt="Achievement 3" className="achievement-image" />
          <img src={achievement4} alt="Achievement 3" className="achievement-image" />
          
        </div>
        <div className="section">
        <h2>Our Alumni</h2>
        <AlumniList /> {/* Render the AlumniList here */}
      </div>
      </div>
      {/* <div className="footer">
        © 2024 Vivekanand Education Society's Institute of Technology. All Rights Reserved.
      </div> */}
    </div>
  );
};

export default Home;
