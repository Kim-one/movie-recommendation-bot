import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import DisplayMovies from "./pages/display_movies";
import DisplayShows from "./pages/display_tv_shows";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navbar/>}>
                    <Route path={'/'} element={<Home/>}></Route>
                    <Route path={'movies'} element={<DisplayMovies/>}></Route>
                    <Route path={'shows'} element={<DisplayShows></DisplayShows>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)