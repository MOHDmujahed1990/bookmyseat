import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";

export const Dishes=()=>{
    const [dish,setDish]=useState(["Curry","Roti","Rice"])
    return(
         <React.Fragment>
            <Grid container spacing={3} sx={{padding:2}}>
                {
                    dish.map((item)=>
                    <Grid item xs={4}>
                       <Card align="center">
                        <CardContent sx={{fontFamily:"monospace",fontSize:50,fontStyle:"italic",color:"#DC143C",bgcolor:"#8FBC8F"}}>
                            {item}
                        </CardContent>
                       </Card>
                    </Grid>
                    )
                }
            </Grid>
         </React.Fragment>
    )
}