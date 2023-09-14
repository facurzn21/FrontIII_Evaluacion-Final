import React from 'react'
import Cards from '../components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      <Cards />
      </div>
    </main>
  )
}

export default Home