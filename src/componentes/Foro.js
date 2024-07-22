import React, {useState, useEffect} from "react";

function load() {
    verPost();
}
window.onload = load;

function agregarPost(){
    var tituloForo = document.getElementById('tx-titulo').value;
    var descripcion = document.getElementById('tx-descripcion').value;
    
    if (tituloForo === "" && descripcion === ""){
        alert("Debe ingresar título y descripción, en las notas");
    } 
    else{
        var importante = document.getElementById("ch-importante").checked;      
        var pos=[];
        pos = JSON.parse(localStorage.getItem("posts"));

        if(!pos){
            pos=[];
            pos.push({tituloForo,descripcion,importante});
        }
        else{      
            var i = pos.findIndex(r => r.tituloForo === tituloForo);
            if(i === -1){
                pos.push({tituloForo, descripcion,importante});
            }
            else{
                pos[i]={tituloForo,descripcion,importante};
            }
        }
        localStorage.setItem("posts", JSON.stringify(pos));
    }
    limpiarForm();
    
}
function limpiarForm(){
    verPost();
    document.getElementById("tx-titulo").value="";
    document.getElementById("tx-descripcion").value="";
    document.getElementById("ch-importante").checked=false;
}

function eliminarPost(tituloForo){
    
    var pos=[];
    pos = JSON.parse(localStorage.getItem('posts'));
    var i= pos.findIndex(r => r.tituloForo === tituloForo);
    alert("Elemento se ha eliminado!");
    pos.splice(i,1);
    localStorage.setItem("posts", JSON.stringify(pos));
    verPost();
}

function verPost(){
    var pos=[];
    pos = JSON.parse(localStorage.getItem("posts"));

    var contenedor = document.getElementById("contenedor");
    var postHtml = "";
    var panelCSS = "";

    pos.forEach(element => {
       
        if(element.importante){
            panelCSS="panel2";
        }
        else{
            panelCSS="panel1";
        }
        postHtml += `<div  class="col-md-1 col-sm-1">
                            <div class="panel panel-default ${panelCSS}">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-md-8">
                                            ${element.tituloForo}
                                            </div>
                                            <div class="col-md-2">
                                            </div>
                                            <div class="col-md-2">
                                                <span onClick="eliminarPost('${element.tituloForo}')" class="fa fa-trash coloricon"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body">${element.descripcion}</div>
                            </div>
                        </div>
        `});
    document.getElementById("contenedor").innerHTML= postHtml;


}




const Foro = () =>{
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
            <div className="container contenedor3">
                <header>
                    <div>
                        <h1 className="titulo2">Postea tu Consulta</h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div class="row">
                            
                            <form>
                                <fieldset>
                                <div class="mb-3">
                                    <input type="text" id="tx-titulo" class="tx-titulo" placeholder="Título Foro"/>
                                </div>
                                <div class="mb-3">
                                    <input type="text" id="tx-descripcion" class="tx-descripcion" placeholder="Descripción"/>
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="ch-importante"/>
                                    <label class="form-check-label" for="disabledFieldsetCheck">
                                        <p className="importante">importante</p>
                                    </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary" id="btn01" onclick="agregarTarea();">AGREGAR</button>
                                </fieldset>
                            </form>
                            <hr/>
                            <div id="contenedor" class="row">  
                            </div>
                        </div>        
                    </section>
                </main>
                <footer></footer>
            </div>
        </>
    )
}
export default Foro