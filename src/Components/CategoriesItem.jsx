import React from "react";
import { Grid,Card,CardContent, Typography } from "@mui/material";
export const CategoriesItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={3}>
                    <Card align="center" sx={{bgcolor:"#FFF0F5"}}>
                        <CardContent>
                           <Typography variant="h4">{item}</Typography> 
                        </CardContent>
                    </Card>
                 </Grid>
        </React.Fragment>
    )
}