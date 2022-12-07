import { Button, Card, Grid } from "@mui/material";
import React, { useState } from "react";


export const BulbModern=()=>{
    const [color,setColor]=useState("white")
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Card sx={{height:300,bgcolor:color}}>
                    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                    <Button color="secondary" variant="contained" fullWidth onClick={()=>setColor("yellow")}>YELLOW</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button color="secondary" variant="contained" fullWidth onClick={()=>setColor("blue")}>BLUE</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button color="secondary" variant="contained" fullWidth onClick={()=>setColor("chartreuse")}>CHARTREUSE</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button color="secondary" variant="contained" fullWidth onClick={()=>setColor("green")}>GREEN</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button color="secondary"  variant="contained" fullWidth onClick={()=>setColor("crimson")}>CRIMSON</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button color="secondary" variant="contained" fullWidth onClick={()=>setColor("coral")}>CORAL</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}