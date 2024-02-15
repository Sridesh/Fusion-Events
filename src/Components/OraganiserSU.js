import React, { useState } from 'react';
import '../Styles/Register.css';
import eye from '../images/eye.png';
import closed from '../images/closed.png';

const OrganiserSU = () => {
  const [formData, setFormData] = useState({
    name: '', // Updated from ownerName to name
    phoneNumber: '',
    email: '',
    username: '',
    description: '',
    password: '',
    confirmPassword: '',
    image: '', // New image field
  });

  const [errors, setErrors] = useState({
    name: '', // Updated from ownerName to name
    phoneNumber: '',
    email: '',
    username: '',
    description: '',
    password: '',
    confirmPassword: '',
    image: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when the user starts typing
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validateInputs = () => {
    // Validation logic for each input
    // Set error messages if conditions are not satisfied
    // Leave spaces for you to write each message
    let isValid = true;

    // Name validation (updated from ownerName to name)
    // Your message here
    if (!/^[A-Za-z ]+$/.test(formData.name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Invalid characters in the name.',
      }));
      isValid = false;
    }

    // Phone Number validation
    // Your message here
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'Phone number must be 10 digits.',
      }));
      isValid = false;
    }

    // Email validation
    // Your message here
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(
        formData.email
      )
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address.',
      }));
      isValid = false;
    }

    // Username validation
    // Your message here
    if (!/^[A-Za-z0-9 ]+$/.test(formData.username)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Invalid characters in the username.',
      }));
      isValid = false;
    }

    // Description validation (assuming it's required)
    // Your message here
    if (formData.description.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: 'Description is required.',
      }));
      isValid = false;
    }

    // Password validation
    // Your message here
    if (formData.password.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required.',
      }));
      isValid = false;
    }

    // Confirm Password validation
    // Your message here
    if (formData.confirmPassword !== formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match.',
      }));
      isValid = false;
    }

    // Image validation (assuming it's required)
    // Your message here
    if (formData.image.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: 'Image is required.',
      }));
      isValid = false;
    }

    // All fields are required validation
    // Your message here
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '' && key !== 'image') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: 'This field is required.',
        }));
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      // Send data to the backend endpoint
      // Example: fetch('/api/registration', { method: 'POST', body: formData })
      console.log('Data submitted:', formData);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error-message">{errors.name}</span>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <span className="error-message">{errors.phoneNumber}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error-message">{errors.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <span className="error-message">{errors.username}</span>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <span className="error-message">{errors.description}</span>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <span className="error-message">{errors.image}</span>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-btn"
          >
            {passwordVisible ? <img src={closed} alt="Eye icon (open)" /> : <img src={eye} alt="Closed eye icon" />}
          </button>
          <span className="error-message">{errors.password}</span>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="toggle-btn"
          >
            {confirmPasswordVisible ? <img src={closed} alt="Eye icon (open)" /> : <img src={eye} alt="Closed eye icon" />}
          </button>
          <span className="error-message">{errors.confirmPassword}</span>
        </div>

        <div className="form-group">
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrganiserSU;
