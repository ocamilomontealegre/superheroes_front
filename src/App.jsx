import { useState } from 'react'
import FormMain from './components/form_components/FormMain.jsx';
import SuperheroContainer from './components/superhero_components/SuperheroContainer.jsx';
import './App.css'

const App = () => {
  return (
    <>
      <FormMain />
      <SuperheroContainer />
    </>
  )
}

export default App
