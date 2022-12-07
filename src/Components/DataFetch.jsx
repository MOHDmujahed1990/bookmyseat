import { Grid } from "@mui/material";
import React, { useState,useEffect } from "react";
import { DataFetchItem } from "./DataFetchItem";
import axios from "axios";


export const DataFetch=()=>{
    const [data,setData]=useState([])
    const getData= async ()=>{
        const result= await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
        console.log(result.data);
    }
    
        useEffect(()=>{
            getData()
        },[])
    
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                {
                  data.map((item)=>
                 <DataFetchItem item={item}/>
                  )
                }
            </Grid>
        </React.Fragment>
    )
}