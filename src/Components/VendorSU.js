import React, { useState } from "react";
import "../Styles/Register.css";
import eye from "../images/eye.png";
import closed from "../images/closed.png";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router";


const VendorSU = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "", // Updated from ownerName to name
    phone: "",
    email: "",
    userName: "",
    description: "",
    password: "",
    confirmPassword: "",
    image: "", // New image field
    vendorCategory: "",
    location: "Colombo",
    accountActive: "",
    imageUrl:"s",
  });

  const [errors, setErrors] = useState({
    name: "", // Updated from ownerName to name
    phone: "",
    email: "",
    userName: "",
    description: "",
    password: "",
    confirmPassword: "",
    image: "",
    vendorCategory: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when the user starts typing
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
        name: "Invalid characters in the name.",
      }));
      isValid = false;
    }

    // Phone Number validation
    // Your message here
    if (!/^\d{10}$/.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number must be 10 digits.",
      }));
      isValid = false;
    }

    // Email validation
    // Your message here
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(formData.email)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address.",
      }));
      isValid = false;
    }

    // userName validation
    // Your message here
    if (!/^[A-Za-z0-9 ]+$/.test(formData.userName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "Invalid characters in the userName.",
      }));
      isValid = false;
    }

    // Description validation (assuming it's required)
    // Your message here
    if (formData.description.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Description is required.",
      }));
      isValid = false;
    }

    // Password validation
    // Your message here
    if (formData.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required.",
      }));
      isValid = false;
    }

    // Confirm Password validation
    // Your message here
    if (formData.confirmPassword !== formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match.",
      }));
      isValid = false;
    }

    // Image validation (assuming it's required)
    // Your message here
    if (formData.image.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: "Image is required.",
      }));
      isValid = false;
    }

    // All fields are required validation
    // Your message here
    Object.keys(formData).forEach((key) => {
      if (key != "accountActive") {
        if (formData[key].trim() === "" && key !== "image") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [key]: "This field is required.",
          }));
          isValid = false;
        }
        console.log(isValid)
      }
    });

    // vendorCategory validation (assuming it's required)
    // Your message here
    if (formData.vendorCategory.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        vendorCategory: "vendorCategory is required.",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data submitted11:", formData);
    if (validateInputs()) {
      formData.accountActive = false;
      formData.location = "";
      formData.imageUrl = formData.image;
      // Send data to the backend endpoint
      // Example: fetch('/api/registration', { method: 'POST', body: formData })
      console.log("Data submitted:", formData);

      axios.post(`http://localhost:8080/api/vendor/addVendor`,formData).then((res)=>{
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
          <label htmlFor="vendorCategory">vendorCategory:</label>

          <select
            className="form-select"
            aria-label="Default select example"
            id="vendorCategory"
            name="vendorCategory"
            onChange={handleChange}
          >
            <option defaultValue>Please Select</option>
            <option value="DECORATORS">DECORATORS</option>
            <option value="VENUE_PLANNERS">VENUE PLANNERS</option>
            <option value="CHOREOGRAPHERS">CHOREOGRAPHERS</option>
            <option value="MEDIA">MEDIA</option>
            <option value="MAKEUP_ARTIST">MAKEUP ARTIST</option>
            <option value="BAR_SERVICES">BAR SERVICES</option>
          </select>
          <span className="error-message">{errors.vendorCategory}</span>
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
            type={passwordVisible ? "text" : "password"}
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
            {passwordVisible ? (
              <img src={closed} alt="Eye icon (open)" />
            ) : (
              <img src={eye} alt="Closed eye icon" />
            )}
          </button>
          <span className="error-message">{errors.password}</span>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={confirmPasswordVisible ? "text" : "password"}
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
            {confirmPasswordVisible ? (
              <img src={closed} alt="Eye icon (open)" />
            ) : (
              <img src={eye} alt="Closed eye icon" />
            )}
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

export default VendorSU;
