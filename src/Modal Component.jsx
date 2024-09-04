import React, { useState, useEffect } from 'react';
import './XModal.module.css';

function Modal({ toggleModal }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation checks
    if (!username) {
      alert('Please fill out the Username field.');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email');
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number');
      return;
    }

    if (!dob || new Date(dob) > new Date()) {
      alert('Invalid date of birth');
      return;
    }

    // If all validations pass, close the modal
    toggleModal();
  };

  // Function to close the modal if clicked outside
  const handleClickOutside = (event) => {
    if (event.target.className === 'modal') {
      toggleModal();
    }
  };

  // Attach event listener to detect clicks outside the modal content
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-content slide-up-animation">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
