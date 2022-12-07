import React from "react";
import { TextField,Button,Grid } from "@mui/material";


export const AddDriver=()=>{
    return(
        <div className="sub">
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="First Name" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Middle Lame" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Last Name" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Mobile" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="D.License Number" fullWidth/>
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>
                   <Button variant="contained" fullWidth>Submit</Button>
                </Grid>
                <Grid item xs={3}>
                   <Button variant="contained" fullWidth>Reset</Button>
                </Grid>
            </Grid>
        </div>
    )
}