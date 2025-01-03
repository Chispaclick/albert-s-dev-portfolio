import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AppFirebase } from './credenciales/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Home } from "./pages/home/Home";
import { Skills } from "./pages/skills/Skills";
import { Certificates } from "./pages/certificates/Certificates";
import { AboutMe } from "./pages/about-me/AboutMe";
import { Login } from "./pages/log/Login";
import { NavBar } from "./components/nav-bar/NavBar";
import { useState } from 'react'
import { Footer } from "./components/footer/Footer";

//Importar los modulos de firebase
const auth = getAuth(AppFirebase);

export const App = () => {
  const [usuario, setUsuario] = useState(null)

  {
    onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Login />
      <Footer />
    </>
  );
};

//{usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
