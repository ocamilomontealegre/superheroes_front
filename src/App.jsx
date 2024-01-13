import { useState } from 'react';
import FormMain from './components/form_components/FormMain.jsx';
import SuperheroContainer from './components/superhero_components/SuperheroContainer.jsx';
import { getSuperheroData } from './services/services.js';
import './App.css'

const App = () => {
  const [ inputText, setInputText ] = useState('');

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <FormMain onChange={handleInputText} value={inputText}/>
      <SuperheroContainer alias={inputText} />
    </>
  )
}

export default App
