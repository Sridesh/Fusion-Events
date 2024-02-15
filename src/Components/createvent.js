// CreateEvent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CreateEvent = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [showPopupVenue, setShowPopupVenue] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = (event) => {
    // Close the popup if the click is outside of the popup content
    if (event.target.classList.contains("overlay-pop")) {
      setShowPopup(false);
    }
  };

  const showPopupV = (event) => {
    // Close the popup if the click is outside of the popup content
    // if (event.target.classList.contains('overlay-pop')) {
    setShowPopup(false);
    // }
    setShowPopupVenue(true);
  };

  const [formData, setFormData] = useState({
    eventType: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //need to save event type to user_selection table in db
    localStorage.setItem("EVENT_TYPE", formData.eventType);
    //if it is success need to show popup
    setShowPopup(true);
  };

  // const handleCreateEvent = () => {
  //   navigate("/vvenues");
  // };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Create Event
      </h1>

      <form onSubmit={handleSubmit} className="login-form text-center">
        <div className="form-group col-sm-6 col align-self-center">
          <label htmlFor="eventType">I am Planning a</label>

          <select
            className="form-select"
            aria-label="Default select example"
            id="eventType"
            name="eventType"
            onChange={handleInputChange}
          >
            <option defaultValue>Please Select event</option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="indoor">Indoor Function</option>
            <option value="outdoor">Outdoor Function</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Next</button>
        </div>
      </form>

      <div>
        {/* <button onClick={togglePopup} className='btnn'>Get Started</button> */}
        {/* <Button onClick={togglePopup} className="pop-btn" variant="primary">Get Started</Button> */}

        {showPopup && (
          <div className="overlay-pop" onClick={closePopup}>
            <div className="popup-up">
              <div className="popup-content-pop">
                <h4 className="headbg" style={{ color: "white" }}>
                  How would you like to join
                </h4>
                <div className="btns">
                  <Button className="pop-btn" variant="primary" onClick={showPopupV}>
                    I have a Venue
                  </Button>
                  <Button
                    className="pop-btn"
                    variant="outline-primary"
                    href="/venues"
                  >
                    I like to select a Venue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showPopupVenue && (
          <div className="overlay-pop" onClick={closePopup}>
            <div className="popup-up">
              <div className="popup-content-pop">
                <h4 className="headbg" style={{ color: "white" }}>
                  How would you like to join
                </h4>
                <div className="btns">
                  <Button className="pop-btn" variant="primary" href="/eventorg">
                    I want an event planer
                  </Button>
                  <Button
                    className="pop-btn"
                    variant="outline-primary"
                    href="/vendors"
                  >
                    Select more vendors
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateEvent;
