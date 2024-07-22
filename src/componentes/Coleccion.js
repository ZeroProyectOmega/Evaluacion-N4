import React, {useState, useEffect} from "react";
import { Image } from "react-bootstrap";
import DS_30_60_F from "./img/Dran_Sword_3-60F_29.webp"
import HS_4_60_T from "./img/Hells_Scythe_4-60T_29.webp"
import WA_4_80_B from "./img/Wizard_Arrow_4-80B_29.webp"
import KS_3_80_N from "./img/Knight_Shield_3-80N_29.webp"

const Coleccion = () =>{
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
            <div className="contenedor2">
                <h3 className="titulo">Tipos de Beyblade</h3>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                        <div className="card text-bg-primary">
                            <Image src={DS_30_60_F} className="card-img-top" alt="SwordDran_3-60F"/>
                            <div className="card-body">
                            <h5 className="card-title">Sword Dran 3-60F</h5>
                            <p className="card-text">Blade: Sword Dran</p>
                            <p className="card-text">Rachet: 3-60</p>
                            <p className="card-text">Bit: Flat</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card text-bg-danger">
                            <Image src={HS_4_60_T} className="card-img-top" alt="ScytheIncendio_4-60T"/>
                            <div className="card-body">
                            <h5 className="card-title">Scythe Indendio 4-60T</h5>
                            <p className="card-text">Blade: Scythe Incendio</p>
                            <p className="card-text">Rachet: 4-60</p>
                            <p className="card-text">Bit: Taper</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card text-bg-warning">
                            <Image src={WA_4_80_B} className="card-img-top" alt="ArrowWizard_4-80B"/>
                            <div className="card-body">
                            <h5 className="card-title">Arrow Wizard 4-80B</h5>
                            <p className="card-text">Blade: Arrow Wizard</p>
                            <p className="card-text">Rachet: 4-80</p>
                            <p className="card-text">Bit: Ball</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card text-bg-success">
                            <Image src={KS_3_80_N} className="card-img-top" alt="HelmKnight_3-80N"/>
                            <div className="card-body">
                            <h5 className="card-title">Helm Knight 3-80N</h5>
                            <p className="card-text">Blade: Helm Knight</p>
                            <p className="card-text">Rachet: 3-80</p>
                            <p className="card-text">Bit: Niddle</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Coleccion