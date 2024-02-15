import React, { useState } from "react";
import CustomSelect from "../common/CustomSelect";
import { Button, Grid, Item } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BasicTable from "./BasicTable";
import axios from "axios";
import swal from "sweetalert";

const AdminMain = () => {
  const [selectedAge, setSelectedAge] = useState("");
  const [vendorApprovals, setVendorApprovals] = useState([]);

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value)
    console.log('sssss',event.target.value);
    // setSelectedAge(event.target.value);
if(event.target.value === 3){
  axios.get(`http://localhost:8080/api/vendor/getAllVendors`).then((res)=>{
    if(res.status === 200){
      console.log(res.data)
      const filteredArray = res.data.filter((item) => !item.accountActive);
      console.log('approvalArray', filteredArray);
      setVendorApprovals(filteredArray);
      // navigate('/venues')
    }
  })
}else if(event.target.value === 1){
  axios.get(`http://localhost:8080/api/propertyOwner/getAllPropertyOwners`).then((res)=>{
    if(res.status === 200){
      console.log(res)
      const filteredArray = res.data.filter((item) => !item.accountActive);
      console.log('approvalArray', filteredArray);
      setVendorApprovals(filteredArray);
      // navigate('/venues')
    }
  })
}else if(event.target.value === 2){
  axios.get(`http://localhost:8080/api/eventOrganizer/getAllEventOrganizer`).then((res)=>{
    if(res.status === 200){
      console.log(res)
      const filteredArray = res.data.filter((item) => !item.accountActive);
      console.log('approvalArray', filteredArray);
      setVendorApprovals(filteredArray);
      // navigate('/venues')
    }
  })
}
    
  };

  const ageOptions = [
    { value: 1, label: "Venues" },
    { value: 2, label: "Event Organizers" },
    { value: 3, label: "Vendors" },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Item sx={{ fontSize: "40px", fontWeight: 900 }}>Admin</Item>
        </Grid>

        <Grid item container spacing={4} mx={4}>
          <Grid item xs={3} mt={3}>
            <CustomSelect
              value={selectedAge}
              label="Approvals"
              onChange={handleAgeChange}
              options={ageOptions}
            />
          </Grid>
          <Grid item xs={6} mt={3}></Grid>
          <Grid item xs={3} mt={3}>
            <Button variant="contained">Inquiry</Button>
          </Grid>
        </Grid>

        <Grid item xs={12} mt={3}>
          <BasicTable approvals ={vendorApprovals} onChange= {handleAgeChange} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminMain;
