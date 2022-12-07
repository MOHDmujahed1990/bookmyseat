import { Card, CardContent, Grid } from "@mui/material";
import React from "react";


export const AirwaysItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={4}>
                <Card align="center" sx={{bgcolor:"#98FB98",height:450}}>
                    <CardContent>
                        <h3><i><b>{item.id}</b></i></h3>
                        <h3><i><b>{item.name}</b></i></h3>
                        <h3><i><b>{item.country}</b></i></h3>
                        <h3><i><b><img src={item.logo} height="50px" alt="" /></b></i></h3>
                        <h3><i><b>{item.slogan}</b></i></h3>
                        <h3><i><b>{item.head_quaters}</b></i></h3>
                        <h3><i><b>{item.website}</b></i></h3>
                        <h3><i><b>{item.established}</b></i></h3>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}