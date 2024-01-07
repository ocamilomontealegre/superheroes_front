import axios from 'axios';
const baseUrl = 'http://localhost:3000/api/superheroes/';

const getSuperheroPicture = async (superheroAlias) => {
  const response = await axios.get(`${baseUrl}picture/${superheroAlias}`);
  return response.data.pictureUrl;
};

export {
  getSuperheroPicture
};