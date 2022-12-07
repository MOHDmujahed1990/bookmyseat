import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


export const Greetings=()=>{
    const [nums,setNums]=useState(1);
    const [greet,setGreet]=useState("Good Morning")


    useEffect(()=>{
       nums>0 && nums <5 && setColor("black")
       nums>5 && nums <8 && setColor("grey")
       nums>8 && nums <18 && setColor("white")
       nums>18 && nums <20 && setColor("coral")
       nums>20 && setColor("black")
    },[nums])
    return(
        <React.Fragment>
            <Grid container spacing={2} align="center">
                <Grid item xs={12}>
                    <Card >
                        <CardContent>
                            <Typography>{greet}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Button sx={{height:100}} variant="contained" fullWidth color="secondary" disabled={nums===1} onClick={()=>setNums(nums-1)}><ArrowCircleDownIcon sx={{fontSize:100, color:"lime"}}/></Button>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{height:150,color:color,bgcolor:"yellow"}}>
                        <CardContent>
                            <Typography variant="h1">{nums}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Button sx={{height:100}} variant="contained" fullWidth color="error" disabled={nums===24} onClick={()=>setNums(nums+1)}><ArrowCircleUpIcon sx={{fontSize:100,color:"lime"}}/></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}