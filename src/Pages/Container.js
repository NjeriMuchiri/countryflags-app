import '../App.css';
import React from 'react';
import { useState } from 'react';

const Container = () =>{
    const[description,setDescription] = useState('Africa');
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
              </section> 
           </body>
    );
};
export default Container;