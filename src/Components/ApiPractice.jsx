import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ApiPracticeItem } from "./ApiPracticeItem";
import axios from "axios";


export const ApiPractice=()=>{
    const [data,setData]=useState([])
    const getData= async()=>{
        const result= await axios.get("https://jsonplaceholder.typicode.com/photos")
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
                    <ApiPracticeItem item={item}/>
                    )
                }
            </Grid>
        </React.Fragment>
    )
}