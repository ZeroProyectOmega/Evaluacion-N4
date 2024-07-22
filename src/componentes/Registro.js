import React, {useState, useEffect} from "react";

const Registro = () =>{
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
            <form action="Foro">
        <div className="form">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Nombre de Usuario</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Ingrese Nombre de Usuario..." aria-label="Username" aria-describedby="basic-addon1" required/>
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mínimo 6 caracteres..." required/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ejemplo@correo.com" required/>
            </div>
            <div>
                <label for="exampleFormControlInput1" className="form-label">Pais</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Región</option>
                    <option value="Ch">Chile</option>
                    <option value="Mx">Mexico</option>
                    <option value="Pe">Peru</option>
                </select>
            </div>
            <div>
                <br/>
                <label for="cFecha" className="form-label">Fecha de Nacimiento</label><br/>
                <input className="form-control" type="number" name="cDia" id="cDia" min="1" max="31"/>
                <label for="cMes"> de </label>
                <select name="cMes" id="cMes" className="form-select" aria-label="Default select example">
                    <option>Enero</option>
                    <option>Febrero</option>
                    <option>Marzo</option>
                    <option>Abril</option>
                    <option>Mayo</option>
                    <option>Junio</option>
                    <option>Julio</option>
                    <option>Agosto</option>
                    <option>Septiembre</option>
                    <option>Octubre</option>
                    <option>Noviembre</option>
                    <option>Diciembre</option>
                </select>
                <label className="form-label" for="cAño"> de </label>
                <input className="form-control" type="number" name="cAño" id="cAño" min="1800" max="2100"/><br/>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                <label className="form-check-label" for="flexCheckDefault">
                Aceptar Terminos y Condiciones
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                Recibir Novedades
                </label>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Registrarse</button>
            </div>
        </div>
    </form>
            </div>
        </>
    )
}
export default Registro