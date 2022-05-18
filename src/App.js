import React from "react";
import { Routes, Route} from "react-router-dom";

import Home from "./components/Home/home.js";
   

    

import FavMovie from "./components/FavList/Favlist.js";

export default function App(){
    return(
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/getMovies"element={<FavMovie/>}/>
        </Routes>
    )
}
