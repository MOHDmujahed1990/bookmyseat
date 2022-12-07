import {  Grid } from "@mui/material";
import React, { useState } from "react";
import { empData } from "./constant";
import { Empitem } from "./Empitem";



export const Emp=()=>{
    const [data,setData]=useState(empData)

    return(
       <React.Fragment>
        <Grid container spacing={2} align="center">
            {
                data.map((item)=>
                <Empitem item={item}/>
                )
            }
        </Grid>
       </React.Fragment>
    )
}