import { useState } from 'react';
import FormMain from './components/form_components/FormMain.jsx';
import SuperheroContainer from './components/superhero_components/SuperheroContainer.jsx';
import { getSuperheroData } from './services/services.js';
import './App.css'

const App = () => {
  const [ inputText, setInputText ] = useState('');
  const [ superheroData, setSuperheroData ] = useState({});
  
  const fetchSuperheroData = () => {
    getSuperheroData(inputText, true)
      .then((response) => setSuperheroData({
        alias: response.alias,
        powers: response.powers,
        description: response.description,
        backgroundColor: response.color
      }))
      .catch((error) => console.error(error));
  };

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <FormMain onSubmit={fetchSuperheroData} onChange={handleInputText} value={inputText} />
      <SuperheroContainer data={superheroData} />
    </>
  )
}

export default App
