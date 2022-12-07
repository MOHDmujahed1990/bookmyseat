import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


export const Indicator=()=>{
    const [nums,setNums]=useState(0);
    const [color,setColor]=useState("black")


    useEffect(()=>{
       nums<50 && setColor("green")
       nums>50 && nums<70 && setColor("orange")
       nums>70 && setColor ("red")
    },[nums])
    return(
        <React.Fragment>
            <Grid container spacing={2} align="center">
                <Grid item xs={12}>
                    <Card sx={{bgcolor:color,height:300,width:400}}>
                        <CardContent>
                            
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Button sx={{height:100}} variant="contained" fullWidth color="secondary" disabled={nums===0} onClick={()=>setNums(nums-5)}><ArrowCircleDownIcon sx={{fontSize:100, color:"lime"}}/></Button>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{height:150,color:color,bgcolor:"yellow"}}>
                        <CardContent>
                            <Typography variant="h1">{nums}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Button sx={{height:100}} variant="contained" fullWidth color="error" disabled={nums===120} onClick={()=>setNums(nums+5)}><ArrowCircleUpIcon sx={{fontSize:100,color:"lime"}}/></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}