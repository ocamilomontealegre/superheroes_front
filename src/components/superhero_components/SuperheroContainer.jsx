import SuperheroImage from './SuperheroImage.jsx';
import SuperheroName from './SuperheroName.jsx';
import SuperheroPowers from './SuperheroPowers.jsx';
import SuperheroDescription from './SuperheroDescription.jsx';

const SuperheroContainer = ({ data }) => {
  const style = { backgroundColor: data.color };

  return(
    <div className='sh-container' style={style}>
      <div className='sh-header'>
        <SuperheroImage alias={data.alias}/>
        <SuperheroName text={data.alias} />
      </div>
      <div className='sh-body'>
        <SuperheroPowers listOfPowers={data.powers}/>
        <SuperheroDescription description={data.description} />
      </div>
    </div>
  )
};

export default SuperheroContainer;