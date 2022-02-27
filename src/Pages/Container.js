import '../App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Container = () =>{
    // const[description,setDescription] = useState('Africa');
    const[countries,setCountries] = useState([]);
    const[continent,setContinent] = useState('');

      const HandleChangeApi = async () =>{
         axios.get(`https://restcountries.com/v3.1/region/ame`)
         .then((response) =>{
            //  let data = response.data;
            console.log(response)
         })
         .catch((error)=>{
             console.log(error);
         });
      }
    // useEffect(() =>{
    //     axios.get(`https://restcountries.com/v3.1/region/ame`)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })       
    // },[]);
        
    return(
        <>
          <section className='container-section'>
              <h1 className='heading' >Continent Flags</h1>
              <div className="section-continents">
                  <label htmlFor="Continents">Choose a Continent: </label>
                  <select 
                  onChange = {HandleChangeApi}
                //   value={continent}
                  
                // onChange ={(e) =>setContinent(e.target.value)
                // }
            >
                      <option value="Africa">Africa</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="Antartica">Antartica</option>
                      <option value="Oceania">Oceania</option>
                  </select>
                  <div className='countries-display'>
                  {continent.length !== 0 && countries.map(country => 
                      <div key={country.area}>  
                      <img src={country.flag.svg} alt={country.name.common} />  
                      <h4>{country.name.common}</h4>          
                          </div>
                  )}
                  </div>
                    </div>
              </section> 
           </>
    );
};
export default Container;