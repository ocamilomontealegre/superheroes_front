import FormButton from './FormButton.jsx';

const FormMain = () => {
  return(
    <form>
      <label htmlFor="sh-alias">Select your favorite superhero from the database</label>
      <input type="text" name="sh-alias" id="sh-alias" />
      <FormButton text='Search' />
    </form>
  )
};

export default FormMain;