import React from 'react';
import '../Style/Perfil.css'; // Assuming you have a CSS file for styling

function Perfil() {
    return (
        <header id='perfil' className="profile-header">
            <div className="profile-info">
                <div className="profile-name">
                    <h1>Esteban Mosquera</h1>
                    <p>Hola! soy un estudiante con gran interés por fortalecer y aplicar mis conocimientos técnicos</p>
                    <p>Con experiencia en desarrollo web y redes, combinando teoría y practica en proyectos personales y aún  aprendiendo</p>
                </div>
            </div>
        </header>
    );
}

export default Perfil;