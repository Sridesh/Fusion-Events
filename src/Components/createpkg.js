import React, { useState, useEffect } from "react";
import "../Styles/Register_copy.css";
import "../Styles/test-copy.css";
import "../Styles/venuepkgdesign.css";
import axios from "axios";
import swal from "sweetalert";
const CreatePkg = () => {
  const [venueData, setVenueData] = useState({});

  const [packages, setPackages] = useState([]);

  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem("ID");
    axios
      .get(
        "http://localhost:8080/api/propertyOwner/getPropertyOwner/" + user_id
      )
      .then((res) => {
        setVenueData(res.data);
        console.log(venueData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  useEffect(() => {
    const user_id = localStorage.getItem("ID");
    axios
      .get(
        "http://localhost:8080/api/venuePackages/getAllVenuePackages"
      )
      .then((res) => {
        setPackages(res.data);
        console.log(packages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const user_id = localStorage.getItem("ID");
    axios
      .get(
        "http://localhost:8080/api/custom-inquiry/getInquiry/VENUE/"+user_id
      )
      .then((res) => {
        setInquiries(res.data.inquiries);
        console.log(res.data.inquiries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [formData, setFormData] = useState({
    packageName: "",
    packageType: "",
    packageDetails: "",
    price: "",
    packageOffer: "",
    imageUrl: "",
    participantCount: "",
  });

  const [errors, setErrors] = useState({
    packageName: "",
    packageType: "",
    packageDetails: "",
    price: "",
    packageOffer: "",
    imageUrl: "",
    participantCount: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const [showPackages, setShowPackages] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when the user starts typing
  };

  const validateInputs = () => {
    let isValid = true;

    // Package Name validation
    if (!/^[A-Za-z ]+$/.test(formData.packageName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        packageName: "Invalid characters in the package name.",
      }));
      isValid = false;
    }

    // Package Type validation
    if (!/^[A-Za-z0-9 ]+$/.test(formData.packageType)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        packageType: "Invalid characters in the package type.",
      }));
      isValid = false;
    }

    // Package Details validation
    if (formData.packageDetails.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        packageDetails: "Package details is required.",
      }));
      isValid = false;
    }

    // Package Price validation
    if (!/^\d+(\.\d{1,2})?$/.test(formData.price)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "Invalid package price.",
      }));
      isValid = false;
    }

    // Package Offer validation (Only numbers allowed)
    if (!/^\d+$/.test(formData.packageOffer)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        packageOffer: "Package offer must contain only numbers.",
      }));
      isValid = false;
    }

    // Image validation (assuming it's required)
    if (formData.imageUrl.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        imageUrl: "Image is required.",
      }));
      isValid = false;
    }

    // All fields are required validation
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "" && key !== "imageUrl") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: "This field is required.",
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
      // Example: fetch('/api/package-registration', { method: 'POST', body: formData })
      console.log("Package data submitted:", formData);

      axios
        .post(
          `http://localhost:8080/api/venuePackages/addVenuePackages`,
          formData
        )
        .then((res) => {
          if (res.status === 201) {
            console.log(res);
            swal("Success", "Package Added!", "success");
            setShowPopup(false);
          } else {
            swal("Oops!", "Error!", "error");
          }
        });
      // Close the popup after successful submission
    }
  };

  const handleConfirmClose = (confirm) => {
    setShowConfirmPopup(false);
    if (confirm) {
      // Close the main form popup
      setShowPopup(false);
      setShowPackages(false);
    }
  };
  const handlePackageConfirmClose = (confirm) => {
    setShowConfirmPopup(false);
    if (confirm) {
      // Close the main form popup
      setShowPackages(false);
    }
  };

  
  const handleInquiryConfirmClose = (confirm) => {
    setShowConfirmPopup(false);
    if (confirm) {
      // Close the main form popup
      setShowInquiry(false);
    }
  };



  return (
    <div>
      
      <div>
        <h4 className="text-center mt-3 venue-profile">Venue Profile</h4>
        <div className="text-center mt-3 venue-details">
         <div className="row">
          <div className="col-sm-6"><h5>Owner Name: </h5></div>
          <div className="col-sm-6"><h5>{venueData.ownerName} </h5></div>

          <div className="col-sm-6"><h5>Venue Name: </h5></div>
          <div className="col-sm-6"><h5>{venueData.venueName} </h5></div>

          <div className="col-sm-6"><h5>Description: </h5></div>
          <div className="col-sm-6"><h5>{venueData.description} </h5></div>

          <div className="col-sm-6"><h5>Phone: </h5></div>
          <div className="col-sm-6"><h5>{venueData.phone} </h5></div>

          <div className="col-sm-6"><h5>Email: </h5></div>
          <div className="col-sm-6"><h5>{venueData.email} </h5></div>
         </div>
          {/* <h5>Owner Name: {venueData.ownerName}</h5>
          <h5>Venue Name: {venueData.venueName}</h5>
          <h5>Description: {venueData.description}</h5>
          <h5>Phone: {venueData.phone}</h5>
          <h5>Email: {venueData.email}</h5> */}
        </div>
      </div>

      <div className="text-center mb-5">
        {/* <div className="col-sm-4"> */}
        <button
        onClick={() => setShowPopup(true)}
        style={{
          backgroundColor: "grey",
          borderRadius: "7px",
          marginLeft:"10px"
        }}
      >
        Add Package
      </button>
        {/* </div> */}

        {/* <div className="col-sm-4"> */}
        <button
        onClick={() => setShowPackages(true)}
        style={{
          backgroundColor: "grey",
          borderRadius: "7px",
          marginLeft:"10px"
        }}
      >
        View Package
      </button>
        {/* </div> */}

        {/* <div className="col-sm-4"> */}
      
        <button
        onClick={() => setShowInquiry(true)}
        style={{
          backgroundColor: "grey",
          borderRadius: "7px",
          marginLeft:"10px"
        }}
      >
        View Inquiries
      </button>
        {/* </div> */}
      

    

      </div>
      

      {showPackages && (
        <div className="poppup">
          <div className="table-responsive p-5">
            <table className="table .table-striped">

              <thead>
                <th>Package Name</th>
                <th>Package Type</th>
                <th>Package Details</th>
                <th>Package Price</th>
                <th>Package Count</th>
                <th>Package Offer</th>
              </thead>
              <tbody>
              {packages.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.packageName}</td>
              <td>{listValue.packageType}</td>
              <td>{listValue.packageDetails}</td>
              <td>{listValue.price}</td>
              <td>{listValue.participantCount}</td>
              <td>{listValue.packageOffer}</td>

            </tr>
          );
        })}
              </tbody>
            </table>

          </div>
          <button
            onClick={() => handlePackageConfirmClose(true)}
            style={{
              backgroundColor: "red",
              borderRadius: "5px"
            }}
          >
            Close
          </button>
        </div>
      )}

{showInquiry && (
        <div className="poppup">
          <div className="table-responsive p-5">
            <table className="table .table-striped">

              <thead>
                <th>Visitor Name</th>
                <th>Visitor Email</th>
                <th>Visitor Mobile</th>
                <th>Inquiry</th>
              </thead>
              <tbody>
              {inquiries.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.visitor.firstName} {listValue.visitor.lastName}</td>
              <td>{listValue.visitor.email}</td>
              <td>{listValue.visitor.phone}</td>
              <td>{listValue.description}</td>

            </tr>
          );
        })}
              </tbody>
            </table>

          </div>
          <button
            onClick={() => handleInquiryConfirmClose(true)}
            style={{
              backgroundColor: "red",
              borderRadius: "5px",
            }}
          >
            Close
          </button>
        </div>
      )}

      {showPopup && (
        <div className="poppup">
          <div className="form-container p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="packageName">Package Name:</label>
                <input
                  type="text"
                  id="packageName"
                  name="packageName"
                  value={formData.packageName}
                  onChange={handleChange}
                />
                <span className="error-message">{errors.packageName}</span>
              </div>

              <div className="form-group">
                <label htmlFor="packageType">Package Type:</label>
                <input
                  type="text"
                  id="packageType"
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                />
                <span className="error-message">{errors.packageType}</span>
              </div>

              <div className="form-group">
                <label htmlFor="packageDetails">Package Details:</label>
                <textarea
                  id="packageDetails"
                  name="packageDetails"
                  value={formData.packageDetails}
                  onChange={handleChange}
                />
                <span className="error-message">{errors.packageDetails}</span>
              </div>

              <div className="form-group">
                <label htmlFor="price">Package Price:</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
                <span className="error-message">{errors.price}</span>
              </div>

              <div className="form-group">
                <label htmlFor="participantCount">Package Count:</label>
                <input
                  type="number"
                  id="participantCount"
                  name="participantCount"
                  value={formData.participantCount}
                  onChange={handleChange}
                />
                <span className="error-message">{errors.participantCount}</span>
              </div>

              <div className="form-group">
                <label htmlFor="packageOffer">Package Offer:</label>
                <input
                  type="number"
                  id="packageOffer"
                  name="packageOffer"
                  value={formData.packageOffer}
                  onChange={handleChange}
                />
                <span className="error-message">{errors.packageOffer}</span>
              </div>

              <div className="form-group">
                <label htmlFor="imageUrl">Package Image:</label>
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
                <button type="submit" className="form-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <button
            onClick={() => setShowConfirmPopup(true)}
            style={{
              backgroundColor: "red",
              borderRadius: "5px",
            }}
          >
            Close
          </button>
        </div>
      )}

      {showConfirmPopup && (
        <div className="confirm-popup">
          <span>Are you sure you want to close?</span> <br></br>
          <div>
            <button
              onClick={() => handleConfirmClose(true)}
              style={{
                backgroundColor: "blue",
                borderRadius: "5px",
              }}
            >
              Yes
            </button>
            <button
              onClick={() => handleConfirmClose(false)}
              style={{
                backgroundColor: "blue",
                borderRadius: "5px",
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePkg;
