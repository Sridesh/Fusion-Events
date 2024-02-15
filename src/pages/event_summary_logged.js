import { useEffect, useState } from "react";
import Axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import hotel from "../images/barnhouse.jpg";
import EventOrganizerImg from "../images/EventOrganizers.png";

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

const EventSummaryLogged = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [venue, setVenue] = useState({});
  const [vendor, setVendor] = useState({});
  const [organizer, setOrganizer] = useState({});
  useEffect(() => {

    Axios.get(`http://localhost:8080/api/visitor/getSelections/`+localStorage.getItem("ID")).then((res)=>{
      if(res.status === 200){
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa', res.data)
        setData(res.data);
      }else if(res.status === 201){
        swal("Oops!", "User Not Approved!", "error");
      }else if(res.status === 203){
        swal("Oops!", "User Name or Password mismatch!", "error");
      }
    })
  }, []);

  const handleOpen = () => {
    var obj = {
      visitorId: localStorage.getItem("ID"),
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

  return (
    <div className="p-5">
      <h4 className="text-center ">My Event</h4>
      <div>
        <div>
          Selected Event Type :{data?.eventCategory}
        </div>
        <div>Selected Venue</div>
        <ul>
          <li>
            <div>
              <h6>{data?.propertyOwner?.venueName}</h6>
              <div className="row">
                {data?.propertyOwner && 
                <div className="col-sm-6">
                  <img src={hotel} />
                </div>
                }
                <div className="col-sm-6">
                  <p className="text-black">
                  {data?.propertyOwner?.description}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
{data?.eventOrganizer && 
      <div>
        <div>Selected Event Organizer</div>
        <ul>
          <li>
            <div>
              <h6>{data?.eventOrganizer?.name}</h6>
              <div className="row">
                {data?.propertyOwner && 
                <div className="col-sm-6">
                  <img src={EventOrganizerImg} />
                </div>
                }
                <div className="col-sm-6">
                  <p className="text-black">
                  {data?.eventOrganizer?.description}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
}
    </div>
  );
};

export default EventSummaryLogged;
