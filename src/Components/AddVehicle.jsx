import React from "react";
import {Grid,TextField,Button} from "@mui/material"


export const AddVehicle=()=>{
    return(
        <div className="sub">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Vehicle Name" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Vehicle Number" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth sx={{height:55}}>Submit</Button>
                </Grid>
            </Grid>
        </div>
    )
}