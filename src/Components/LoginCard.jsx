import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const LoginCard=()=>{
    const [fname,setFname]=useState("")
    const [mname,setMname]=useState("")
    const [lname,setLname]=useState("")
    const [dob,setDob]=useState("")
    const [mail,setMail]=useState("")
    const [number,setNumber]=useState("")
    const [address,setAddress]=useState("")
    const [perm,setPerm]=useState("")
    const [data,setData]=useState([])

    const handleAdd=()=>{
        setData([...data,{fname,mname,lname,dob,mail,number,address,perm}])
    }
    const handleDel=()=>{
         setFname("")
         setMname("")
         setLname("")
         setDob("")
         setMail("")
         setNumber("")
         setAddress("")
         setPerm("")
    }
    const handleDelete=(ind)=>{
        const result=data.filter((item,i)=>i!==ind)
        setData(result)
    }
    return(
        <React.Fragment>
            <Typography align="center" sx={{color:"crimson",fontFamily:"monospace",fontStyle:"italic"}} variant="h3">Enter Your Details</Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#D2B48C"}}>
                        <CardContent >
                            <TextField value={fname} onChange={(e)=>setFname(e.target.value)} sx={{bgcolor:"#ADD8E6"}} variant="outlined" fullWidth label="Enter First Name"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#D2B48C"}}>
                        <CardContent>
                            <TextField  value={mname} onChange={(e)=>setMname(e.target.value)} sx={{bgcolor:"#ADD8E6"}} variant="outlined" fullWidth label="Enter Middle Name"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#D2B48C"}}>
                        <CardContent>
                            <TextField value={lname} onChange={(e)=>setLname(e.target.value)} sx={{bgcolor:"#ADD8E6"}} variant="outlined" fullWidth label="Enter Last Name"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#D2B48C"}}>
                        <CardContent>
                            <TextField value={dob} onChange={(e)=>setDob(e.target.value)} sx={{bgcolor:"#ADD8E6"}} variant="outlined" fullWidth label="Enter Date of Birth"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#D2B48C"}}>
                        <CardContent>
                            <TextField value={mail} onChange={(e)=>setMail(e.target.value)} sx={{bgcolor:"#ADD8E6"}} variant="outlined" fullWidth label="Enter Email Id "/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#D2B48C"}}>
                        <CardContent>
                            <TextField value={number} onChange={(e)=>setNumber(e.target.value)} sx={{bgcolor:"#ADD8E6"}} variant="outlined" fullWidth label="Enter Mobile Number "/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#D2B48C"}}>
                        <CardContent>
                            <TextField value={address} onChange={(e)=>setAddress(e.target.value)} sx={{bgcolor:"#ADD8E6"}} variant="outlined" fullWidth label="Enter Address "/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card sx={{bgcolor:"#D2B48C"}}>
                        <CardContent>
                            <TextField value={perm} onChange={(e)=>setPerm(e.target.value)} sx={{bgcolor:"#ADD8E6"}} variant="outlined" fullWidth label="Enter Permanent Address "/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <Button onClick={handleAdd} variant="contained" fullWidth color="success">Submit</Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={handleDel} variant="contained" fullWidth color="error">Reset</Button>
                </Grid>
                <Grid item xs={3}></Grid>
                {
                    data.map((item,ind)=>
                    <Grid item xs={4}>
                        <Card align="center" sx={{bgcolor:"#E0FFFF",color:"#800080",fontStyle:"oblique"}}>
                            <CardContent>
                            <PermContactCalendarIcon sx={{fontSize:70,color:"chartreuse"}}/>
                                <Typography variant="h5">
                                    {`Full Name: ${item.fname} ${item.mname} ${item.lname}`}
                                </Typography>
                                <Typography variant="h5">
                                    {`D.O.B: ${item.dob}`}
                                </Typography>
                                <Typography variant="h5">
                                    {`Email: ${item.mail}`}
                                </Typography>
                                <Typography variant="h5">
                                    {`Mobile No: ${item.number}`}
                                </Typography>
                                <Typography variant="h5">
                                    {`Address: ${item.address}`}
                                </Typography>
                                <Typography variant="h5">
                                    {`Perm Address: ${item.perm}`}
                                </Typography>
                                <Button variant="contained" onClick={()=>handleDelete(ind)} color="warning">Delete</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                }
            </Grid>
        </React.Fragment>
    )
}