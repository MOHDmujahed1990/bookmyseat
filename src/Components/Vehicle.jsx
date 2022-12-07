import React, { useState } from "react"
import {Button, Card, CardContent, Grid} from "@mui/material"

export const Vehicle=()=>{
    const [vehicles,setVehicle]=useState("Bike")
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                <Card align="center">
                    <CardContent>
                            <img src={`Vehicle/${vehicles}.jpg`} alt="" style={{height:150, width:300}} />
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="success" onClick={()=>setVehicle("Airplane")}>Airplane</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="success" onClick={()=>setVehicle("Bike")}>Bike</Button>
                </Grid>
                <Grid item xs={2}>
                   <Button variant="contained" fullWidth color="success" onClick={()=>setVehicle("Taxi")}>Taxi</Button>
                </Grid>
                <Grid item xs={2}>
                   <Button variant="contained" fullWidth color="success" onClick={()=>setVehicle("Train")}>Train</Button>
                </Grid>
                <Grid item xs={2}>
                   <Button variant="contained" fullWidth color="success" onClick={()=>setVehicle("Van")}>Van</Button>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </React.Fragment>
    )
}