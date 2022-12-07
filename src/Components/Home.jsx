import React from "react";
import { Addcust } from "./Addcust";
import { AddDriver } from "./AddDriver";
import { AddVehicle } from "./AddVehicle";
import { IdCard } from "./IdCard";
// import { LayoutGrid } from "./LayoutGrid";

export const Home=()=>{
    return(
        <div>
            {/* <h1>Home</h1> */}
            <IdCard/>
            <Addcust/>
            {/* <LayoutGrid/> */}
            <AddVehicle/>
            <AddDriver/>
        </div>
    )
}