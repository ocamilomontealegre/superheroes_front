import { useState, useEffect } from "react";
import { getSuperheroPicture } from "../services/services.js";

const SuperheroImage = ({ superheroAlias = 'All Might' }) => {

  const [ superheroPicture, setSuperheroPicture ] = useState('');
  
  useEffect(() => {
    getSuperheroPicture(superheroAlias)
      .then((response) => setSuperheroPicture(response))
      .catch((error) => console.error(error)
  )}, []);

  return(
    <img 
      className='sh-image'
      src={superheroPicture}
      alt='Superhero'
    ></img>
  )
}

export default SuperheroImage;