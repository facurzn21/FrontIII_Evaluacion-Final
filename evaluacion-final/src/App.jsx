import React from 'react';
import './App.css'
import { UserProvider } from './contexts/UserContext';
import Cards from './components/Card'




const App = () => {
  return (
    <UserProvider>
      <Cards />
    </UserProvider>
  )
}

export default App;