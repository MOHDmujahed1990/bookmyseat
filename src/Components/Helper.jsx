import React, { useState } from "react";
import {Grid,Button,Card,CardContent} from "@mui/material"

export const Helper=()=>{
    const [helpers,setHelpers]=useState("Nurse")
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Card align="center">
                        <CardContent>
                            <img src={`Helper/${helpers}.jpg`} alt="" style={{width:300, height:150}} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="warning" onClick={()=>setHelpers("Farmer")}>Farmer</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="warning" onClick={()=>setHelpers("Fisherman")}>Fisherman</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="warning" onClick={()=>setHelpers("Nurse")}>Nurse</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="warning" onClick={()=>setHelpers("Police")}>Police</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="warning" onClick={()=>setHelpers("Teacher")}>Teacher</Button>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </React.Fragment>
    )
}