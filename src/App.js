import React, { useState } from 'react';
import './XModal.module.css'; // Ensure to import your CSS file

function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!username || !email || !phone || !dob) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }
  
    const dobDate = new Date(dob);
    if (dobDate > new Date()) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }
  
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                Phone Number:
                <input
                  type="text" // Changed from 'number' to 'text'
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <br />
              <label>
                Date of Birth:
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </label>
              <br />
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;
