import React from 'react';
import Container from './Pages/Container';
import './App.css';
import { useState,useEffect} from 'react';
import axios from 'axios';


function App() {
  const[continent,setContinent] = useState([]);
  const[countries,setCountry] = useState('')
   
      useEffect(() =>{
        const getData = async() => {
          const data = await axios.get('https://restcountries.com/v3.1/all');
          setContinent(data);
        };
        getData();
      },[]);
      console.log(continent);
      
    return(
         <>
         <Container/>
      <div className='country-container'>
           
           
      </div>
      </>
    )
}

export default App;
