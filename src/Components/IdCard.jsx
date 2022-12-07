import React from "react";
import { Grid,Avatar,Card,CardContent,Button } from "@mui/material";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CarRentalIcon from '@mui/icons-material/CarRental';


export const IdCard=()=>{
    return(
        <Card>
            <CardContent align="center">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Avatar src="img/img/Driver.jpg" variant="square"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar sx={{height:100,width:100}} src="img/img/User.jpg"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar src="img/img/IndiaAmb.jpg" variant="square"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="error" sx={{fontSize:30}}>Kamal Kishor Sharma</Button>
                    </Grid>
                    <Grid item xs={4} align="right">
                        <PhoneAndroidIcon/>
                    </Grid>
                    <Grid item xs={8} align="left">
                        <Button sx={{fontSize:25, height:30}}>1234567890</Button>
                    </Grid>
                    <Grid item xs={4} align="right">
                        <CarRentalIcon/>
                    </Grid>
                    <Grid item xs={4} align="left">
                        <Button sx={{fontSize:25, height:30}}>MH2024112233</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}