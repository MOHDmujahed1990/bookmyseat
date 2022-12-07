import { Button, Card, Grid, TextField } from "@mui/material";
import React, { useState } from "react";


export const Bulb=()=>{
    const [color,setColor]=useState("black");
    return(
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Card sx={{height:300, bgcolor:color}}>
                    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success" onClick={()=>setColor("yellow")}>ON</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" fullWidth color="error" onClick={()=>setColor("white")}>OFF</Button>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </React.Fragment>
    )
}