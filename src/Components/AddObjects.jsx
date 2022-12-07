import { Button,Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";


export const AddObjects=()=>{
    const [data,setData]=useState(["Cat","Bat","Mat"])
    const [object,setObject]=useState("")

    const handleAdd=()=>{
          setData([...data,object])
    }
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Card sx={{bgcolor:"#F0E68C"}}>
                        <CardContent>
                            <TextField label="Add Object" variant="outlined" fullWidth onChange={(e)=>setObject(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#F0E68C"}}>
                        <CardContent>
                            <Button variant="contained" fullWidth color="warning" sx={{height:55}} onClick={handleAdd} >Add</Button>
                        </CardContent>
                    </Card>
                </Grid>
                {
                 data.map((item)=>
                   <Grid item xs={4}>
                    <Card align="center" sx={{bgcolor:"#90EE90",color:"#0000CD",fontSize:50,fontFamily:"fantasy"}}>
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