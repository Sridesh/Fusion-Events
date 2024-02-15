import React, { useState } from "react";
import Axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import hotel from "../images/barnhouse.jpg";
import Button from "react-bootstrap/Button";
import organizerImg from "../images/EventOrganizers.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EventOrgSummary = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => {
    var obj = {
      visitorId: localStorage.getItem("ID"),
      eventOrganizerId: localStorage.getItem("EO_ID"),
      propertyOwnerId: localStorage.getItem("VENUE_ID"),
      eventCategory: localStorage.getItem("EVENT_TYPE"),
    };
    console.log(obj);

    Axios.post("http://localhost:8080/api/visitor/addSelection", obj).then(
      (res) => {
        if (res.status === 201) {
          swal("Success", "Event Saved!", "success");
          navigate("/");
        } else {
          swal("Oops!", "Error!", "error");
        }
      }
    );
  };

  const handlePopUpOpen = async (e) => {
    setShowPopup(true);
  };

  const closePopup = (event) => {
    // Close the popup if the click is outside of the popup content
    if (event.target.classList.contains("overlay-pop")) {
      setShowPopup(false);
    }
  };

  return (
    <div className="p-5">
      <h4 className="text-center ">Event Summary</h4>
      <div>
        <div>
          Selected Event Type :{" "}
          {localStorage.getItem("EVENT_TYPE").toUpperCase()}
        </div>
        <div>Selected Venue</div>
        <ul>
          <li>
            <div>
              {/* <h6>Event Org</h6> */}
              <h6>BarnHouse</h6>
              <div className="row">
                <div className="col-sm-6">
                  <img src={hotel} />
                </div>
                <div className="col-sm-6">
                  <p className="text-black">
                  Our rooms Spend a day at The Barnhouse! Perfect for
                    unwinding, recharging and finding your fulfillment with
                    individually tailored experiences.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* <div>
          Selected Event Type :{" "}
          {localStorage.getItem("EVENT_TYPE").toUpperCase()}
        </div>
        <div>Selected Venue</div> */}
        <ul>
          <li>
            <div>
              <h6>Selected Event Organizer</h6>
              <h6>Kevin</h6>
              <div className="row">
                <div className="col-sm-6">
                  <img src={organizerImg} />
                </div>
                <div className="col-sm-6">
                  <p className="text-black">
                  I'm Kevin, I'm happy to work with you
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="row text-center">
          <div className="col-sm-6">
            <button className="btn btn-oval btn-success mr-2 ml-2" onClick={handlePopUpOpen}>
              {/* <a
                href="/event_summary"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              > */}
                I need more Services
              {/* </a> */}
            </button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-oval btn-info ml-3" onClick={handleOpen}>
              {/* <a
                href="/event_summary"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              > */}
              Save Details
              {/* </a> */}
            </button>
          </div>

          {showPopup && (
          <div className="overlay-pop" onClick={closePopup}>
            <div className="popup-up">
              <div className="popup-content-pop">
                <h4 className="headbg" style={{ color: "white" }}>
                  Select Services
                </h4>
                <div className="btns">
                  <Button className="pop-btn" variant="primary" href="/vendors">
                    Vendors
                  </Button>
                  <Button
                    className="pop-btn"
                    variant="outline-primary"
                    href="/eventorg"
                  >
                    Event Organizers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default EventOrgSummary;
