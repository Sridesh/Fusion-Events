import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid, Item } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  proteins,
  price,
  id,
  accountActive
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    proteins,
    price,
    id,
    accountActive,
  };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable(props) {
  const [vendorApprovals, setVendorApprovals] = useState([]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    console.log("aaaaaaaaaaaaaaaaaa", props.approvals);
    const rows = props.approvals
      ? props.approvals.map((item) =>
          createData(
            item.ownerName,
            item.venueName,
            item.phone,
            item.description,
            item.userName,
            item.email,
            item.userName,
            item.id,
            item.accountActive
            // item.accountActive
          )
        )
      : null;
    console.log("rows", rows);
    setVendorApprovals(rows);
  }, [props.approvals]);


  const onClickButton = (id) => {
    console.log("aqqqqqqqqqqqqqqqqq", id);

    axios
      .patch(`http://localhost:8080/api/admin/venues/activate/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("eeeeeeeeeeeee", res);
          swal("Approved!", "User Approved!", "success");

          axios.get(`http://localhost:8080/api/propertyOwner/getAllPropertyOwners`).then((res)=>{
            if(res.status === 200){
              console.log(res.data)
              const filteredArray = res.data.filter((item) => !item.accountActive);
              console.log('approvalArray', filteredArray);

              const rows = filteredArray
              ? filteredArray.map((item) =>
                  createData(
                    item.ownerName,
                    item.venueName,
                    item.phone,
                    item.description,
                    item.userName,
                    item.email,
                    item.userName,
                    item.id,
                    item.accountActive
                    // item.accountActive
                  )
                )
              : null;
            setVendorApprovals(rows);

              // navigate('/venues')
            }
          })




          // navigate('/ccc')
        } else if (res.status === 201) {
          swal("Oops!", "User Not Approved!", "error");
        } else if (res.status === 203) {
          swal("Oops!", "User Name or Password mismatch!", "error");
        }
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,  height: 400}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Owner Name</TableCell>
            <TableCell align="right">Venue Name</TableCell>
            <TableCell align="right">Contact NUmber</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">userName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendorApprovals &&
            vendorApprovals.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.proteins}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => onClickButton(row.id)}>approve</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
