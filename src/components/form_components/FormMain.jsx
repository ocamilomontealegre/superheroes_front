import FormButton from './FormButton.jsx';

const FormMain = ({ onSubmit, onChange, value }) => {
  return(
    <form className='sh-form' onSubmit={onSubmit}>
      <label htmlFor="sh-alias">Select your favorite superhero from the database</label>
      <br />
      <input type="text" name="sh-alias" id="sh-alias" value={value} onChange={onChange}  />
      <FormButton text='Search' />
    </form>
  );
};

export default FormMain;