import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React,{useState} from "react";
import { DishessItem } from "./DishessItem";

export const Dishess=()=>{
    const [data,setData]=useState([])
    const [obj,setObj]=useState("")

    const handleAdd=()=>{
        setData([...data,obj])
    }
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Card sx={{bgcolor:"#FFFFE0"}}>
                        <CardContent>
                            <TextField variant="outlined" fullWidth label="Add Dishes" onChange={(e)=>setObj(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"#FFFFE0"}}>
                        <CardContent>
                            <Button sx={{height:55}} variant="contained" fullWidth color="error" onClick={handleAdd}>Add</Button>
                        </CardContent>
                    </Card>
                </Grid>
                {
                    data.map((item)=>
                     <DishessItem item={item}/>
                    )
                }
            </Grid>
        </React.Fragment>
    )
}