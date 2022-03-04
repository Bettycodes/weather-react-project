import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
     <div className='weather'>
       <form>
         <div className='row'>
           <div className='col-9'>
         <input 
         type="search"
         placeholder='Enter a city..'
         className="form-control"
         />
         </div>
         <div className='col-3'>
         <input type="submit" value="search" className='btn btn-primary w-100'/>
         </div>
         </div>
       </form>

     </div>
     <h1 className='city'>City</h1>
     <ul className='first'>
       <li>Friday 10:31</li>
       <li>description</li>
     </ul>
     <div className='row'>
       <div className='col-6 temp-icon'>
         <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="partly cloudy"/>
       -4°C
       </div>
       <div className='col-6'>
         <ul className='second'>
           <li>Precipitation: 0% </li>
           <li>Humidity: 43% </li>
           <li>Wind: 11 km/h</li>
         </ul>
       </div>
     </div>
      </div>
     <footer>
       Coded by Bethel Girma {" "}
     <a href='https://github.com/Bettycodes/weather-react-project.git' target="_blank" rel="noreferrer"> Source code</a>
     </footer>
    </div>
  );
}


