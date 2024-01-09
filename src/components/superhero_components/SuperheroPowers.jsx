const SuperheroPowers = ({ listOfPowers }) => {
  console.log("🦖 ~ file: SuperheroPowers.jsx:2 ~ SuperheroPowers ~ listOfPowers:", listOfPowers)
  return(
    <ul className='sh-powers'>
      {listOfPowers.map((power, id) => <li key={id}>{power}</li>)}
    </ul>
  )
}

export default SuperheroPowers;