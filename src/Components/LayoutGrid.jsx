import React from "react";
import {Grid,Button} from "@mui/material"

export const LayoutGrid=()=>{
    return(
        <div className="sub">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                   <Button variant="contained" fullWidth>1</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth>2</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth>3</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="secondary">4</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="secondary">5</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success">6</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success">7</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success">8</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success">9</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth color="warning">10</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth color="warning">11</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth color="warning">12</Button>
                </Grid>
            </Grid>
        </div>
    )
}