import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AirwaysItem } from "./AirwaysItem";


export const Airways=()=>{
    const [data,setData]=useState([])
    const getData= async ()=>{
        const result= await axios.get("https://api.instantwebtools.net/v1/airlines")
        setData(result.data)
    }

      useEffect(()=>{
         getData()
      },[])
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                {
                  data.map((item)=>
                   <AirwaysItem item={item}/>
                  )
                }
            </Grid>
        </React.Fragment>
    )
}