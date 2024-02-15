import * as React from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/InsideEventOrg.css";
import { Carousel } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";
import DropdownBtn from "../Components/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import Inquiries from "../Components/inquiries";
import CustomCarousel from "../Components/Carousel";
import { Button, Grid, Item } from "@mui/material";
import giftBoxImage from "../images/giftBox.jpeg";
import email from "../images/email.png";
import axios from "axios";
import swal from "sweetalert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const InsideEventOrg = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [imagesNew, setImagesNew] = useState([]);
  const [itemId, setItemId] = useState(null);
  const [numberArray, setNumberArray] = useState([]);
  const [newarr, setNewarr] = useState([]);
  const [list, setList] = useState();
  const [listB, setListb] = useState([]);
  const title = "Select a service";
  const [wid, setWid] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setList(imagesNew.find((item) => item.id === 1));
  };
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    description: "",
  });

  useEffect(() => {
    setIsLoading(true);
    Axios.get(
      "https://api.unsplash.com/photos/?client_id=A9fkduaGnNn3aJD6YeYDq_qQLEEG7OyUAYc1lzlSmgw"
    )
      .then((res) => {
        // console.log('API Response:', res);
        setImages(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log('API Error:', err); // Log the error
        setIsLoading(false);
        // console.log('failed');
      });
  }, []);

  useEffect(() => {
    if (itemId !== null) {
      const numberString = images[itemId].width.toString();
      const arrayFromNumber = numberString.split("");
      setNumberArray(arrayFromNumber);
    }
  }, [itemId, images]);

  useEffect(() => {
    localStorage.setItem("EO_ID", id);
    axios
      .get(`http://localhost:8080/api/eventOrganizerPackage/getAllEventOrganizerPackages`)
      .then((res) => {
        if (res.status === 200) {
          console.log("111111111111", res.data);
          setImagesNew(res.data);
        } else if (res.status === 201) {
          swal("Oops!", "User Not Approved!", "error");
        } else if (res.status === 203) {
          swal("Oops!", "User Name or Password mismatch!", "error");
        }
      });
  }, [id]);

  useEffect(() => {
    if (itemId !== null) {
      const number = images[itemId].width;
      setWid(number);
    }
  }, [itemId, images]);

  const found = images.find((item) => item.id === id);
  const found2 = images.find((item) => item.width === wid);

  useEffect(() => {
    if (found && found.urls) {
      const urlsArray = Object.values(found.urls);
      const listArray = found.links ? Object.values(found.links) : [];

      // console.log('match');
      setNewarr(urlsArray);
      setList(listArray);
    } else {
      setNewarr([]);
      // console.log(images);
      // console.log('no match');
    }
  }, [found]);

  useEffect(() => {
    if (found2 && found2.links) {
      const listArray2 = found2.links ? Object.values(found2.links) : [];

      setListb(listArray2);
      console.log("match");
    } else {
      setListb([]);
      console.log("no match");
    }
  }, [found2]);

  // console.log(newarr);
  // console.log(list);

  useEffect(() => {
    console.log(itemId);
  }, [itemId]);

  const handleItemSelected = (selectedId) => {
    setItemId(selectedId);
  };

  const handleClick = () => {
    console.log("2626262626");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var obj = {
      visitorId: parseInt(localStorage.getItem("ID")),
      description: formData.description,
      event_category: "EVENT_ORGANIZER",
      category_id: parseInt(localStorage.getItem("EO_ID")),
    };
    // Add your form submission logic here, for example, sending the data to a server
    console.log("Form submitted:", obj);
    axios.post(`http://localhost:8080/api/custom-inquiry/addInquiry`,obj).then((res)=>{
        if(res.status === 200){
        }else if(res.status === 201){
          swal("Success!", "User Not Approved!", "success");
        }else if(res.status === 500){
          swal("Oops!", "Error!", "error");
        }
      })
    // Close the popup after submission
  };
  return (
    <div className="inside p-3">
      {/* <h1> index {id}</h1> */}
      <div className="heads">
        <div className="greet">
          {/* Welcome to {found ? found.alt_description : 'The Venue'} */}
            Plan Your Event With Me
        </div>
      </div>
      <div className="text-center mt-1 mb-1 ">
        <button className="btn btn-oval btn-success">
          <a
            href="/event_org_summary"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Select This As Your Event Organizer
          </a>
        </button>
      </div>

      <div>
        <p style={{ color: "black" }}>
        "Hello everyone! My name is Kevin, and I am thrilled to be here today as your event organizer. I believe that life is a collection of moments, and I am passionate about creating experiences that leave a lasting impression. With a background in event planning and a heart for bringing visions to life, I've had the privilege of orchestrating a diverse range of events, from corporate conferences to intimate celebrations.
          <br></br>
          <br></br>
          My journey in event organizing has been driven by a love for creativity and attention to detail. I take pride in curating environments that not only meet but exceed the expectations of our clients and guests. Whether it's finding the perfect venue, coordinating seamless logistics, or adding that special touch to create a unique atmosphere, every element is carefully considered to make each event extraordinary.
          <br></br>
          <br></br>
          <br></br>
          <strong>
            My Srvices:-
          </strong>
          <br></br>
          <br></br>
          <strong> Event Planning:</strong> Event organizers plan and organize a wide range of events, such as conferences, seminars, weddings, parties, trade shows, and more. They work closely with clients to understand their requirements and vision for the event.
          <br></br>
          <strong>Venue Selection:</strong> Choosing an appropriate venue is crucial for the success of an event. Event organizers evaluate and select venues based on factors such as capacity, location, facilities, and budget.
<br></br>
<strong>Budget Management:</strong> Event organizers develop and manage budgets for events, ensuring that all expenses are accounted for. They work to optimize costs without compromising the quality of the event.
<br></br>
<strong>Logistics Coordination:</strong> Coordinating logistics involves managing various aspects of an event, including transportation, accommodation, catering, audio-visual equipment, and other necessary arrangements.
<br></br>
<strong>Vendor Coordination:</strong> Event organizers collaborate with vendors and suppliers to secure services and products needed for the event. This may include catering, florists, photographers, and other specialized services.
<br></br>
<strong>Timeline and Schedule Planning:</strong> Creating a detailed timeline and schedule is essential to ensure that all elements of the event run smoothly. Event organizers carefully plan and coordinate the sequence of activities.
<br></br>
<strong>Marketing and Promotion:</strong> Depending on the nature of the event, event organizers may be involved in marketing and promotional activities to attract attendees and create awareness.
<br></br>
<strong>On-Site Management:</strong> During the event, organizers are on-site to oversee the execution, manage any unexpected issues, and ensure that everything follows the planned schedule.
<br></br>
<strong>Post-Event Evaluation:</strong> After the event, organizers often conduct post-event evaluations to assess the success of the event, gather feedback, and identify areas for improvement.
        </p>
      </div>
      {/* 
      <Grid container>
        <Grid item xs={6}>
          <img src="../images/barnhouse.jpg" alt="" />
        </Grid>
        <Grid item xs={6}>
          <p>
            Our rooms Spend a day at The Barnhouse! Perfect for unwinding,
            recharging and finding your fulfillment with individually tailored
            experiences.LKR 3,500/- nett per personInclusive of a welcome drink,
            lunch, free use of the pool, tea or coffee with cake in the
            evening.Free for kids below 6 years. Half rate for kids between 6-12
            years.Reservations required.
          </p>
        </Grid>
      </Grid> */}
      <div className="vpanel2 ">
        <div className="ms-head">
          <h3>Packages</h3>
        </div>
        <div className="conten">
          {imagesNew.map((image, index) => (
            <Button onClick={handleOpen}>
              <div className="litbox" key={index}>
                <img src={giftBoxImage} />
                <p style={{ color: "black" }}>{image.packageName}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Package Details
            </Typography>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
            <Grid container sx={{ mt: 3 }}>
              <Grid item xs={6}>
                Package Name :
              </Grid>
              <Grid item xs={6}>
                {list?.packageName}
              </Grid>
              <Grid item xs={6}>
                Package Description :
              </Grid>
              <Grid item xs={6}>
                {list?.packageDetails}
              </Grid>
              <Grid item xs={6}>
                Package Offer :
              </Grid>
              <Grid item xs={6}>
                {list?.packageOffer}
              </Grid>
              <Grid item xs={6}>
                Package Type :
              </Grid>
              <Grid item xs={6}>
                {list?.packageType}
              </Grid>
              <Grid item xs={6}>
                Participant Count :
              </Grid>
              <Grid item xs={6}>
                {list?.participantCount}
              </Grid>
              <Grid item xs={6}>
                price :
              </Grid>
              <Grid item xs={6}>
                {list?.price}
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>

      <div className="vpanel2 ">
        <div className="ms-head">
          <h3>Inquiries</h3>
        </div>
        <Grid container>
          <Grid item xs={10}>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Message</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button type="submit" className="subbtn">
                  Send
                </button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>

      <div className="vpanel2 ">
        <div className="ms-head">
          <h3>Contact us</h3>
        </div>
        <Grid container>
          <Grid item xs={12}>
            <img style={{ height: "50px", width: "50px" }} src={email} />
          </Grid>
          <Grid item xs={10}>
            manuasfas@gmail.com
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InsideEventOrg;
