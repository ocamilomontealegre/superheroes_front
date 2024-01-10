const SuperheroPowers = ({ listOfPowers }) => {
  return(
    <ul className='sh-powers'>
      {(listOfPowers ) 
        ? listOfPowers.map((power, id) => <li key={id}>{power}</li>)
        : <li>No available content</li>
      }
    </ul>
  )
}

export default SuperheroPowers;