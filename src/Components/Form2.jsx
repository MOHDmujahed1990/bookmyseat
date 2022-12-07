import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Form2 = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [perm, setPerm] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setData([
      ...data,
      { fname, mname, lname, dob, mail, number, address, perm },
    ]);
  };
  const handleRes = () => {};
  const handleDelete=(ind)=>{
    const result=data.filter((item,i)=>i!==ind)
    setData(result)
  }
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <TextField
                onChange={(e) => setFname(e.target.value)}
                variant="outlined"
                label="Enter First Name"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <TextField
                onChange={(e) => setMname(e.target.value)}
                variant="outlined"
                label="Enter Middle Name"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <TextField
                onChange={(e) => setLname(e.target.value)}
                variant="outlined"
                label="Enter Last Name"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <TextField
                onChange={(e) => setDob(e.target.value)}
                variant="outlined"
                label="Enter Date Of Birth"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <TextField
                onChange={(e) => setMail(e.target.value)}
                variant="outlined"
                label="Enter Email Id"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <TextField
                onChange={(e) => setNumber(e.target.value)}
                variant="outlined"
                label="Enter Mobile Number"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <TextField
                onChange={(e) => setAddress(e.target.value)}
                variant="outlined"
                label="Enter Address"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardContent>
              <TextField
                onChange={(e) => setPerm(e.target.value)}
                variant="outlined"
                label="Enter Permanent Address"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Button
            onClick={handleAdd}
            variant="contained"
            color="success"
            fullWidth
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={handleRes}
            variant="contained"
            color="error"
            fullWidth
          >
            Reset
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
        {
            data.map((item,ind)=>
              <Grid item xs={4}>
                <Card align="center">
                    <CardContent>
                        <AccountCircleIcon sx={{fontSize:70}}/>
                        <Typography variant="h5">
                            {`Full Name      : ${item.fname} ${item.mname} ${item.lname}`}
                        </Typography>
                        <Typography variant="h5">
                            {`DOB            : ${item.dob}`}
                        </Typography>
                        <Typography variant="h5">
                            {`Email          : ${item.mail}`}
                        </Typography>
                        <Typography variant="h5">
                            {`Mobile No      : ${item.number}`}
                        </Typography>
                        <Typography variant="h5">
                            {`Address        : ${item.address}`}
                        </Typography>
                        <Typography variant="h5">
                            {`Perm Address   : ${item.perm}`}
                        </Typography>
                        <Button onClick={()=>handleDelete(ind)} variant="contained" color="warning">Delete</Button>
                    </CardContent>
                </Card>
              </Grid>
            )
        }
      </Grid>
    </React.Fragment>
  );
};
