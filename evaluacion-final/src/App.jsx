import React, { useContext } from "react";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import Cards from "./components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Contacto from "./routes/Contacto";
import Detalle from "./routes/Detalle";
import Favoritos from "./routes/Favoritos";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import "./contexts/ThemeContext.css";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;

const Theme = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Router>
      <div className={darkMode ? "theme-dark" : "theme-light"}>
        <AppNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/fav" element={<Favoritos />} />
          <Route path="/details/:id?" element={<Detalle />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/*" element={<Cards />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
