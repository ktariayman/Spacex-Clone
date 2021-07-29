// import { createSlice } from "@reduxjs/toolkit";

// const initialState ={
//     cars:["Model S","Model 3","Model X","Model Y" , "Solar Roof" , "Solar Panels"]
// }
// const carSlice = createSlice ({
//     name:"car",
//     initialState,
//     reducers:{}
// })

// export const selectCars = state => state.car.cars
// export default carSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    navbarItem:["FALCON 9","FALCON HEAVY","DRAGON ","STARSHIP " , "HUMAN SPACEFLIGHT" , "RIDESHARE"]
}

 
 

 

 
 

const navSlice = createSlice ({
    name:"Navbar",
    initialState,
    reducers:{}
})

export const selectNavbar = state => state.car?.navbarItem
export default navSlice.reducer
