import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { Button, Grid, Item } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";

function createData(name, calories, fat, carbs, protein, proteins, price, id,accountActive) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    proteins,
    price,
    id,
    accountActive
    // history: [
    //   {
    //     date: "2020-01-05",
    //     customerId: "11091700",
    //     amount: 3,
    //   },
    //   {
    //     date: "2020-01-02",
    //     customerId: "Anonymous",
    //     amount: 1,
    //   },
    // ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const onClickButton = (id) => {
    console.log("aqqqqqqqqqqqqqqqqq", id);

    axios
      .patch(`http://localhost:8080/api/admin/venues/activate/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("eeeeeeeeeeeee", res);
          swal("Approved!", "User Approved!", "success");
          // navigate('/ccc')
        } else if (res.status === 201) {
          swal("Oops!", "User Not Approved!", "error");
        } else if (res.status === 203) {
          swal("Oops!", "User Name or Password mismatch!", "error");
        }
      });
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
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
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    accountActive: PropTypes.bool.isRequired,
  }).isRequired,
};

export default function CollapsibleTable(props) {
  const [vendorApprovals, setVendorApprovals] = useState([]);
  // const { approvals } = props;
  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  //   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  //   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  // ];

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
            item.accountActive,
            // item.accountActive
          )
        )
      : null;
    console.log("rows", rows);
    setVendorApprovals(rows);
  }, [props.approvals]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
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
            vendorApprovals.map((row) => {
              console.log('hghghghghg', row)
              if (!row.accountActive) {
                return <Row key={row.name} row={row} />;
              }
              return null; // or any other alternative if needed
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
