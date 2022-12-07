import { Button, Grid, TextField } from "@mui/material"
import React, { useState } from "react"


export const AddColours=()=>{
    const [name,setName]=useState("green");
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>{name}</h1>
                </Grid>
                <Grid item xs={8}>
                    <TextField variant="outlined" fullWidth label="Enter Colour"/>
                </Grid>
                <Grid item xs={4}>
                     <Button sx={{height:55}} variant="contained" fullWidth color="warning">Submit</Button>
                </Grid>
                <Grid item xs={3}>
                    <h2>{name}</h2>
                </Grid>
                <Grid item xs={3}>
                    <h3>{name}</h3>
                </Grid>
                <Grid item xs={3}>
                    <h4>{name}</h4>
                </Grid>
                <Grid item xs={3}>
                    <h5>{name}</h5>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}