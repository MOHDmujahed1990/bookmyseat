import { Card, CardContent, Grid } from "@mui/material";
import React from "react";

export const ProductsItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={6} >
                <Card align="center">
                    <CardContent sx={{height:820,bgcolor:"#FAFAD2"}}>
                          <h4> id: {item.id}</h4>
                          <h4> Title: {item.title}</h4>
                          <img src={item.thumbnail} height="200px" width={"400px"} alt="" /> <br />
                          <h4> Description: {item.description}</h4>
                          <h4> Price: {item.price} $</h4>
                          <h4> Discount: {item.discountPercentage} %</h4>
                          <h4> Rating: {item.rating}</h4>
                          <h4> Stock: {item.stock}</h4>
                          <h4> Brand: {item.brand}</h4>
                          <h4> Category: {item.category}</h4>
                          <img src={item.images[0]} height="100px" alt="" />
                          <img src={item.images[1]} height="100px" alt="" />
                          <img src={item.images[2]} height="100px" alt="" />
                          <img src={item.images[3]} height="100px" alt="" />
                          <img src={item.images[4]} height="100px" alt="" />
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}