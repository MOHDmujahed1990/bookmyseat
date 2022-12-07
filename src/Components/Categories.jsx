import { Card, CardContent, Grid } from "@mui/material";
import React,{ useState,useEffect } from "react";
import axios from "axios"
import { CategoriesItem } from "./CategoriesItem";

export const Categories=()=>{
    const [data,setData]=useState([])
    const getData= async()=>{
        const result= await axios.get("https://fakestoreapi.com/products/categories")
        setData(result.data)
    }

    {
        useEffect(()=>{
            getData()
        },[])
    }
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                {
                 data.map((item)=>
                 <CategoriesItem item={item}/>
                 )
                }
            </Grid>
        </React.Fragment>
    )
}