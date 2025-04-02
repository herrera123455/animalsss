import { useState } from 'react'

import './App.css'

import AnimalsShow from './AnimalShow'

function getRandomAnimal(){
  const animals = ['cat','bird','dog','gator','horse']

return animals[Math.floor(Math.random()* animals.length)]
}

console.log(getRandomAnimal())

function App(){

  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalsShow type={animal} key={index}/>
  })

  return(
    <div className='app'>
      <button onClick={handleClick}>Add animal</button>
      <div className='animals-list'>
        {renderAnimals}
      </div>
    </div>
  )
}

export default App
