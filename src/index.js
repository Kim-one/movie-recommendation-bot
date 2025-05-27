// import Chatbot from "./pages/chatbot";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";

export default function App(){
    return <Home/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)