import '../App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Container = () =>{
    const[description,setDescription] = useState('Africa');
    const[continent,setContinent] = useState([]);

    const getCountries = () => {
        axios.get('https://restcountries.com/v3.1/all').then((response) => {
            console.log(response);
            const country = response.data;
            setContinent(country);
        });
    };
      useEffect(() => getCountries(), [])
           
    return(
        <body>
          <section className='container-section'>
              <h1 className='heading' >Continent Flags</h1>
              <div className="section-continents">
                  <label htmlFor="Continents">Choose a Continent: </label>
                  <select value={description} 
                  onChange = {(e) =>setDescription(e.target.value)}
                  className="countries">
                      <option value="Africa">Africa</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="North America">North America</option>
                      <option value="South America">South America</option>
                      <option value="Antartica">Antartica</option>
                      <option value="Oceania">Oceania</option>
                      
                  </select>
              </div>
              <div className='countries'>
                 
              </div>
              </section> 
           </body>
    );
};
export default Container;