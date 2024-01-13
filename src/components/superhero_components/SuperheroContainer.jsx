import { useEffect, useState } from 'react';
import { getSuperheroData } from '../../services/services.js';
import SuperheroImage from './SuperheroImage.jsx';
import SuperheroName from './SuperheroName.jsx';
import SuperheroPowers from './SuperheroPowers.jsx';
import SuperheroDescription from './SuperheroDescription.jsx';

const SuperheroContainer = ({ alias }) => {
  const [ superheroData, setSuperheroData ] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSuperheroData(alias);
        setSuperheroData({
          alias: response.alias,
          powers: response.powers,
          description: response.description,
          backgroundColor: response.color
        })
      } catch (err) {
        throw new Error(err);
      }  
    }

    fetchData();
  }, [superheroData]);

  const style = { backgroundColor: superheroData.backgroundColor };

  return(
    <div className='sh-container' style={style}>
      <div className='sh-header'>
        <SuperheroImage alias={superheroData.alias}/>
        <SuperheroName text={superheroData.alias} />
      </div>
      <div className='sh-body'>
        <SuperheroPowers listOfPowers={superheroData.powers}/>
        <SuperheroDescription description={superheroData.description} />
      </div>
    </div>
  )
};

export default SuperheroContainer;