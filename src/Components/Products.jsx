import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductsItem } from "./ProductsItem";
import axios from "axios";

export const Products=()=>{
    const [data,setData]=useState([])
    const getData= async ()=>{
        const result= await axios.get("https://dummyjson.com/products")
        setData(result.data.products)
    }
     useEffect(()=>{
        getData()
     },[])
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                {
                    data.map((item)=>
                    <ProductsItem item={item}/>
                    )
                }
            </Grid>
        </React.Fragment>
    )
}
