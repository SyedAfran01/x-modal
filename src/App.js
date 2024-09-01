import React, { useState } from 'react';
import './XModal.module.css';

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

    // Check for empty fields
    if (!username || !email || !phone || !dob) {
      alert('Please fill out all fields.');
      return;
    }

    // Email validation
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Phone number validation
    if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Date of Birth validation
    const dobDate = new Date(dob);
    if (dobDate > new Date()) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }

    // Close modal on successful submission
    setIsOpen(false);
    setUsername('');
    setEmail('');
    setPhone('');
    setDob('');
  };

  return (
    <div className="container">
      <h2>User Details Modal</h2>
      <button className="open-button" onClick={handleOpenModal}>
        Open Form
      </button>

      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Fill Details</h3>
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
              <label>
                Email Address:
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>
                Date of Birth:
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </label>
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
