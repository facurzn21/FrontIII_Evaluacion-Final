import React from 'react';
import './App.css'
import { UserProvider } from './contexts/UserContext';
import Cards from './components/Card'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contacto from './routes/Contacto';
import Detalle from './routes/Detalle';
import Favoritos from './routes/Favoritos';
import Home from './routes/Home';



const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/detalle" component={Detalle} />
          <Route path="/favoritos" component={Favoritos} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Router>
      <Cards />
    </UserProvider>
  )
}

export default App;