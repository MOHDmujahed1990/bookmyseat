import { Card, CardContent, Grid } from "@mui/material";
import React from "react";


export const ApiPracticeItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={3}>
                <Card align="center">
                    <CardContent>
                        <h4>{item.albumId}</h4>
                        <h4>{item.id}</h4>
                        <h4>{item.title}</h4>
                        <h4><img src={item.url} height="250px" alt="" /></h4>
                        <h4><img src={item.thumbnailUrl} alt="" /></h4>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}