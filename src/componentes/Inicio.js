import React, {useState, useEffect} from "react";
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import bey_x from "./img/beyblade_X.jpg";
import rev_comp from "./img/revisa_compra.png";
import trailer from "./img/beybladeXTrailer.jpg";
import dransword from "./img/dransword.png"
import { Container } from "react-bootstrap";

const Inicio = () =>{
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
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <Image src={bey_x} fluid className="d-block w-100" alt="beybladeLogo"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={rev_comp} fluid className="d-block w-100" alt="mapaTienda"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://www.youtube.com/watch?v=N2BWSmcO4qk" target="_blank"><Image src={trailer} fluid className="d-block w-100" alt="beybladeTrailer"/></a>
                    </Carousel.Item>
                </Carousel>
                <div className="contenedor1">
                    <Image src={dransword} alt="" className="infoImage"/>
                    <div className="parrafo">
                        <p id="info">Beyblade X es un manga y una línea de juguetes japoneses basados en la franquicia Beyblade de Takara Tomy.</p>
                        <p id="info">La cuarta generación de la franquicia, la línea de juguetes Beyblade X, se lanzó el 15 de julio de 2023,</p>
                        <p id="info">mientras que el manga original se serializa en la revista de manga infantil CoroCoro Comic de Shogakukan a partir de mayo de 2023.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inicio