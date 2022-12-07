import { Card, CardContent } from "@mui/material";
import React from "react";
import { Airways } from "./Airways";
// import { Products } from "./Products";
// import { ApiPractice } from "./ApiPractice";
// import { Categories } from "./Categories";
// import { Emp } from "./Emp";
// import { Form2 } from "./Form2";
// import { AddObjects } from "./AddObjects";
// import { Dishess } from "./Dishess";
// import { DataFetch } from "./DataFetch";
// import { LoginCard } from "./LoginCard";

export const Home3=()=>{
    return(
        <React.Fragment>
            <Card>
                <CardContent sx={{bgcolor:"#FFE4C4"}}>
            {/* <AddObjects/> */}
            {/* <Dishess/> */}
            {/* <LoginCard/> */}
            {/* <Form2/> */}
            {/* <Categories/> */}
            {/* <Emp/> */}
            {/* <DataFetch/> */}
            {/* <ApiPractice/> */}
            <Airways/>
            {/* <Products/> */}
                </CardContent>
            </Card>
        </React.Fragment>
    )
}