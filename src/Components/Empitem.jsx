import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


export const Empitem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={4}>
                <Card align="center" sx={{fontStyle:"italic",color:"blue",}}>
                    <CardContent>
                        <InsertEmoticonIcon sx={{fontSize:70,color:"chartreuse"}}/> <br />
                        <Typography variant="h5">{`Full Name: ${item.fname} ${item.mname} ${item.lname}`}</Typography>
                        <Typography variant="h4">Age:{item.age}</Typography>
                        <Typography variant="h4">City:{item.city}</Typography>
                        <Typography variant="h4">Gender:{item.gender}</Typography>
                    </CardContent>
                </Card>
             </Grid>
        </React.Fragment>
    )
}