import { Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";

export const ObjectsData=()=>{
    const [data,setData]=useState(["cat","bat","mat"])
    return(
        <React.Fragment>
            <Grid container spacing={3}>
                {
                  data.map((item)=>
                  <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            {item}
                        </CardContent>
                    </Card>
                  </Grid>
                  )
                }
            </Grid>
        </React.Fragment>
    )
}