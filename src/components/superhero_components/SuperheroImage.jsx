import { useState, useEffect } from "react";
import { getSuperheroPicture } from "../../services/services.js";

const SuperheroImage = ({ alias }) => {

  const [ superheroPicture, setSuperheroPicture ] = useState('');
  
  useEffect(() => {
    getSuperheroPicture(alias)
      .then((response) => setSuperheroPicture(response))
      .catch((error) => console.error(error)
  )}, [alias]);

  return(
    <img 
      className='sh-image'
      src={superheroPicture}
      alt={alias}
    ></img>
  )
}

export default SuperheroImage;