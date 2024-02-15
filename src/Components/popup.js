import React, { useState } from 'react';
import '../Styles/popup.css'; // Import the CSS file
import Button from 'react-bootstrap/Button';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = (event) => {
    // Close the popup if the click is outside of the popup content
    if (event.target.classList.contains('overlay-pop')) {
      setShowPopup(false);
    }
  };

  return (
    <div>
      {/* <button onClick={togglePopup} className='btnn'>Get Started</button> */}
      <Button onClick={togglePopup} className="pop-btn" variant="primary">Get Started</Button>

      {showPopup && (
        <div className="overlay-pop" onClick={closePopup}>
          <div className="popup-up">
            <div className="popup-content-pop">
              
              <h4 className="headbg" style={{color:'white'}}>You need to login to create an event</h4>
              <div className="btns">
                 <Button className="pop-btn" variant="primary" href='/login'>Login</Button>
                 <Button className="pop-btn" variant="outline-primary" href='/register/Visitor'>SignUp</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
