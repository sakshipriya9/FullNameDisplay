import React, { useState } from 'react';

const FullNameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      const fullNameValue = `${firstName} ${lastName}`;
      setFullName(fullNameValue);
      setIsSubmitted(true);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const isSubmitDisabled = !firstName.trim() || !lastName.trim(); // Check if any of the fields are empty or contains only whitespace

  return (
    <div>
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
      {isSubmitted && (
        <div>
          <p><strong>Full Name:</strong> {fullName}</p>
        </div>
      )}
    </div>
  );
};

export default FullNameForm;
