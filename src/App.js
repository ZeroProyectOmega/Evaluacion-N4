import './App.css';
import React, { useEffect, useState} from "react";
import { Router, Route, Link, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Foro from "./componentes/Foro";
import Coleccion from "./componentes/Coleccion"
import Novedades from './componentes/Novedades';
import Registro from './componentes/Registro';

const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path='Foro' element={<Foro/>}/>
      <Route path='Coleccion' element={<Coleccion/>}/>
      <Route path='Novedades' element={<Novedades/>}/>
      <Route path='Registro' element={<Registro/>}/>
    </Routes>

  )
}

export default App
