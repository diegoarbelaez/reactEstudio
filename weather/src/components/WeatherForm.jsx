
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import '../styles/WeatherForm.css'

export default function WeatherForm({setCity, setIsLoading}) {

  let ciudad_temporal = null;

  const actualizarCity = (event) => {
    ciudad_temporal = event.target.value;
  };


  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    console.log("llamada handleSubmit");
    if (ciudad_temporal.length > 0){
      setCity(ciudad_temporal);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='separated'>
      <TextField onChange={ actualizarCity} type="text" id="outlined-basic" label="City" variant="standard" className='textField'/>
      <Button onClick={handleSubmit} variant="contained" size="large" className="buttonStyle">Check Weather</Button>
    </form>
  );
}
