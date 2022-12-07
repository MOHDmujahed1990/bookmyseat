import React, { useState } from "react";
import {Grid,Card,CardContent,Button} from "@mui/material"


export const Fruit=()=>{
    const [fruits,setFruits]=useState("Apple")
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Card align="center">
                        <CardContent>
                            <img src={`Fruit/${fruits}.jpg`} alt="" style={{height:150,width:300}} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="error" onClick={()=>setFruits("Apple")}>Apple</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="error" onClick={()=>setFruits("Banana")}>Banana</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="error" onClick={()=>setFruits("Kivi")}>Kivi</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="error" onClick={()=>setFruits("Mango")}>Mango</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="error" onClick={()=>setFruits("Orange")}>Orange</Button>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </React.Fragment>
    )
}