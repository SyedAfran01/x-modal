import React, { useState } from 'react';
import Modal from './Modal Component.jsx';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={toggleModal} className="open-button">Open Form</button>
      {isOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
