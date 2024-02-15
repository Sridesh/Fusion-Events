import React, { useState } from 'react';
import '../Styles/Register.css';
import eye from '../images/eye.png';
import closed from '../images/closed.png';
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router";

const PropownerSU = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    ownerName: '',
    venueName: '',
    phone: '',
    email: '',
    userName: '',
    description: '',
    password: '',
    confirmPassword: '',
    imageUrl: '', // New image field
    location: "Colombo",
    accountActive: "ss",
  });

  const [errors, setErrors] = useState({
    ownerName: '',
    venueName: '',
    phone: '',
    email: '',
    userName: '',
    description: '',
    password: '',
    confirmPassword: '',
    imageUrl: '',
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

    // Owner Name validation
    // Your message here
    if (!/^[A-Za-z ]+$/.test(formData.ownerName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ownerName: 'Invalid characters in the owner name.',
      }));
      isValid = false;
    }

    // Venue Name validation
    // Your message here
    if (!/^[A-Za-z ]+$/.test(formData.venueName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        venueName: 'Invalid characters in the venue name.',
      }));
      isValid = false;
    }

    // Phone Number validation
    // Your message here
    if (!/^\d{10}$/.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Phone number must be 10 digits.',
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

    // userName validation
    // Your message here
    if (!/^[A-Za-z0-9 ]+$/.test(formData.userName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: 'Invalid characters in the userName.',
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
    if (formData.imageUrl.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        imageUrl: 'Image is required.',
      }));
      isValid = false;
    }

    // All fields are required validation
    // Your message here
    Object.keys(formData).forEach((key) => {
      // if(key !== 'accountActive'){
      if (formData[key].trim() === '' && key !== 'imageUrl' ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: 'This field is required.',
        }));
        isValid = false;
      }
    // }
    });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      // Send data to the backend endpoint
      // Example: fetch('/api/registration', { method: 'POST', body: formData })
      formData.accountActive = false;
      formData.location = "";
      console.log('Data submitted:', formData);

      axios.post(`http://localhost:8080/api/propertyOwner/addPropertyOwner`,formData).then((res)=>{
        if(res.status === 200 || res.status === 201){
          swal("Registered!", "Your info has been sent to adminstration!.Admin will contact you shortly.", "success");
          navigate('/')
        }else{
          swal("Oops!", "Something went wrong!", "error");
        }
      })
      
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ownerName">Owner Name:</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
          />
          <span className="error-message">{errors.ownerName}</span>
        </div>

        <div className="form-group">
          <label htmlFor="venueName">Venue Name:</label>
          <input
            type="text"
            id="venueName"
            name="venueName"
            value={formData.venueName}
            onChange={handleChange}
          />
          <span className="error-message">{errors.venueName}</span>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <span className="error-message">{errors.phone}</span>
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
          <label htmlFor="userName">userName:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <span className="error-message">{errors.userName}</span>
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
          <label htmlFor="imageUrl">Image:</label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            accept="image/*"
            onChange={handleChange}
          />
          <span className="error-message">{errors.imageUrl}</span>
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

export default PropownerSU;
