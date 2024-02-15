import React, { useState } from "react";
import "./Styles/test.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import giftBoxImage from "./images/user.png";
import "./Styles/inside.css";

const Regpop = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={openPopup}>{text}</div>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <div className="big">
              <Grid container >
                <Grid item xs={3} sx={{mt:5}}>
                  <Link to="/register/Visitor">
                    <div className="">
                      <div className="conten">
                        <div className="litboxx">
                          <img src={giftBoxImage} />

                          <div> Visitor</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={3} sx={{mt:5}}>
                  <Link to="/register/Vendor">
                    <div className=" ">
                      <div className="conten">
                        <div className="litboxx">
                          <img src={giftBoxImage} />
                          <div> Vendor</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={3} sx={{mt:5}}>
                  <Link to="/register/Organiser">
                    <div className=" ">
                      <div className="conten">
                        <div className="litboxx">
                          <img src={giftBoxImage} />
                          <div> Event Organiser</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={3} sx={{mt:5}}>
                  <Link to="/register/Owner">
                    <div className=" ">
                      <div className="conten">
                        <div className="litboxx">
                          <img src={giftBoxImage} />
                          <div> Poperty Owner</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid>
              </Grid>
              {/* <div className="pop-cont">
                <Link to="/register/Visitor">
                  <div className="linkdiv"> Visitor</div>
                </Link>
                <Link to="/register/Vendor">
                  <div className="linkdiv"> Vendor</div>
                </Link>
                <Link to="/register/Organiser">
                  <div className="linkdiv"> Event Organiser</div>
                </Link>
                <Link to="/register/Owner">
                  <div className="linkdiv"> Poperty Owner</div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Regpop;
