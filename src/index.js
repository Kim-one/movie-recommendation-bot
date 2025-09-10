import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import DisplayMovies from "./pages/display_movies";
import DisplayShows from "./pages/display_tv_shows";
import Chat from "./pages/chat";
import Login from "./pages/login";
import Signin from "./pages/signin";
import {AuthProvider} from "./pages/AuthContext";

export default function App(){
    return (
        <React.StrictMode>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Navbar/>}>
                            <Route path={'/'} element={<Home/>}></Route>
                            <Route path={'movies'} element={<DisplayMovies/>}></Route>
                            <Route path={'shows'} element={<DisplayShows></DisplayShows>}></Route>
                            <Route path={'chatbot'} element={<Chat/>}></Route>
                            <Route path={'login'} element={<Login/>}></Route>
                            <Route path={'register'} element={<Signin/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </React.StrictMode>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)