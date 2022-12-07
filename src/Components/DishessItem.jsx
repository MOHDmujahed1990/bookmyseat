import React from "react";
import { Grid,Card,CardContent } from "@mui/material";


export const DishessItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={4}>
                        <Card align="center" sx={{bgcolor:"#FFE4B5",fontSize:50,fontFamily:"monospace",fontStyle:"italic",color:"#8A2BE2"}}>
                            <CardContent>
                                {item}
                            </CardContent>
                        </Card>
                     </Grid>
        </React.Fragment>
    )
}