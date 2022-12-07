import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";


export const DataFetchItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={4}>
                <Card align="center" >
                    <CardContent sx={{height:600,bgcolor:"#FAF0E6"}}>
                        <img src={item.image} width="200px" alt="" />
                       <Typography variant="h6">
                       <b>Id:</b> {item.id}
                       </Typography>
                       <Typography variant="h6">
                       <b>Category:</b> {item.category}
                       </Typography>
                       <Typography variant="h6">
                        <b>Title:</b> {item.title}
                       </Typography>
                       <Typography variant="h6">
                       <b>Description:</b>{item.description.substring(0,70)}...
                       </Typography>
                       <Typography variant="h6">
                       <b>Price:</b> {item.price} $
                       </Typography>
                       <Typography variant="6">
                       <b>Rating:</b> {item.rating.rate}
                       </Typography>
                       <Typography variant="h6">
                       <b>Reviews:</b> {item.rating.count}
                       </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}