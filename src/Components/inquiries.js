import React, { useState } from 'react';
import '../Styles/inquiries.css'

const Inquiries = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isPopupVisible, setPopupVisibility] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, for example, sending the data to a server
    console.log('Form submitted:', formData);
    // Close the popup after submission
    setPopupVisibility(false);
  };

  return (
    <div className='popupdiv'>
      <button onClick={() => setPopupVisibility(true)} className='popbtn         '>Inquire</button>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close-btn" onClick={() => setPopupVisibility(false)}>
              &times;
            </span>
            <h2>Create Inquiry</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Full Name</label>
                <input
                //   type="text"
                //   id="email"
                //   name="email"
                //   value={formData.email}
                //   onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Contact Number</label>
                <input
                //   type="number"
                //   id="password"
                //   name="password"
                //   value={formData.password}
                //   onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                //   type="email"
                //   id="email"
                //   name="email"
                //   value={formData.email}
                //   onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  required
                />
              </div>
              <div>
                <button type="submit" className='subbtn'>Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inquiries;
