import { Card, CardContent, Grid,Rating } from "@mui/material";
import React from "react";
import Carousel from 'react-material-ui-carousel'


export const ProductsItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={6} >
                <Card align="center">
                    <CardContent sx={{height:850,bgcolor:"#FAFAD2"}}>
                          {/* <h4> id: {item.id}</h4> */}
                          <h4> Brand: {item.title}</h4>
                          <img src={item.thumbnail} height="200px" width={"400px"} alt="" /> <br />
                          <h4> Description: {item.description}</h4>
                          <h4> Price: {item.price} $</h4>
                          <h4> Discount: {item.discountPercentage} %</h4>
                          {/* <h4> Rating: {item.rating}</h4> */}
                          <h4><Rating value={item.rating}/></h4>
                          <h4> Stock: {item.stock}</h4>
                          <h4> Brand: {item.brand}</h4>
                          <h4> Category: {item.category}</h4>
                          <Carousel  navButtonsAlwaysVisible interval={"5000"} stopAutoPlayOnHover >
                          <img src={item.images[0]} height="150px" alt="" />
                          <img src={item.images[1]} height="150px" alt="" />
                          <img src={item.images[2]} height="150px" alt="" />
                          <img src={item.images[3]} height="150px" alt="" />
                          <img src={item.images[4]} height="150px" alt="" />
                          </Carousel>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}