import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";


import Usuarios from "./components/Usuarios/Usuarios";
import AdicionarUsuario from "./components/AdicionarUsuario/AdicionarUsuario";
import DetalhesUsuario from "./components/DetalhesUsuario/DetalhesUsuario";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Início</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios"> Usuários Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar"> Adicionar Usuários</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/usuarios" element={<Usuarios/>} />
            <Route path="/usuarios/:id" element={<DetalhesUsuario/>} />
            <Route path="/adicionar" element={<AdicionarUsuario/>} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada(){
  return <>
    <h1>404</h1>
    <p>Página não encontrada</p>
  </>
}

export default App;

