import SuperheroImage from './SuperheroImage.jsx';
import SuperheroName from './SuperheroName.jsx';
import SuperheroPowers from './SuperheroPowers.jsx';
import SuperheroDescription from './SuperheroDescription.jsx';

const SuperheroContainer = () => {
  return(
    <div className='sh-container'>
      <div className='sh-header'>
        <SuperheroImage />
        <SuperheroName text='All Might' />
      </div>
      <div className='sh-body'>
        <SuperheroPowers listOfPowers={['Super Strength', 'Super Speed', 'One for All', 'Plus Ultra']}/>
        <SuperheroDescription description='The Symbol of Peace, he&#39;s a towering figure with a chiseled physique that embodies strength and heroism' />
      </div>
    </div>
  )
};

export default SuperheroContainer;