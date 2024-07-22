import React, {useState, useEffect} from "react";

const Novedades = () =>{
    return(
        <>
            <div className="navegador">
                <ul className="nav navbar-custom nav-pills justify-content-end">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link custom-active active" aria-current="page" href="Registro">Registrate (Formulario)</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="Novedades">Novedades</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="Coleccion">Coleccion</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="Foro">Foro</a>
                    </li>
                </ul>
            </div>
            <div className="container">
                
            </div>
        </>
    )
}
export default Novedades