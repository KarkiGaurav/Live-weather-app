import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CloudIcon from '@mui/icons-material/Cloud';

const Weather = () => {
   
  const [city, setCity] = useState("Uttarakhand");
  const [ cTemp, settemp ] = useState("");
 
  const getWeather = async () => {
         const getData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=53fa34e5ed42077e3d7a0ede8b5be94d`);
          // console.log(getData.data.main.temp);
          settemp(getData.data.main)
  }
 
  useEffect( ()=> {
    getWeather();
  },[{city}]);
  

  return (
    <>

    <div className='cotainer'>
      <h1 className='heading'>LIVE SEARCH <span>WEATHER APP</span> </h1>

      <input className='inputfield' placeholder='Enter Your City Name' value={city} onChange={(event) => {setCity(event.target.value ) }} />

         {
            !city? <div className='error'> No Data Found </div> : (
          <>
             <h2 className='city'>{city}</h2>
            <h1 className='heading'><CloudIcon style = {{ height:78 , width:78  }} /> </h1> 
           <div className='box'>
             <h1>{cTemp.temp}°C </h1>

             <h4>Min : {cTemp.temp_min} | Max : {cTemp.temp_max} </h4>
             <h2 className='pres'>Pressure : {cTemp.pressure}</h2>
             
            </div>
          </> )
        }
        <h5>© Gaurav Singh Karki</h5>
     </div>
      

    </>
  )
}

export default Weather;
