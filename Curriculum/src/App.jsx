import React from "react";
import Navbar from "./components/Navbar";
import Perfil from "./components/Perfil";
import Conocimientos from "./components/Conocimientos";
import Contacto from "./components/Contacto";


function App() {
    return (
        <>
        <Navbar />
        <Perfil />
        <Conocimientos />
        <Contacto />
        </>
    );
}

export default App;