import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, handle form submission logic, such as sending data to an API
    alert(`Message sent by: ${formData.name}`);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
