import '../App.css';
import React from 'react';
import { useState} from 'react';
import axios from 'axios';

const Container = () =>{
    // const[description,setDescription] = useState('Africa');
    const[countries,setCountries] = useState([]);
    const[continent,setContinent] = useState('');

      const HandleChangeApi = async (e) =>{
          setContinent(e.target.value);
         axios.get(`https://restcountries.com/v3.1/region/${e.target.value}`)
         .then((response) =>{
            //  let data = response.data;
            console.log(response)
            setCountries(response.data.map((item) =>item))
         })
         .catch((error)=>{
             console.log(error);
         });
         };
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
                      <option value="Americas">Americas</option>
                      <option value="Oceania">Oceania</option>
                  </select>

                    </div>
                     <div className='countries-display'> 
                     {continent.length !== 0 &&
                     countries.map((item) =>(
                         <div key={item.area}>
                             <article className='displayer'>
                                 <img src={item.flags.svg} alt={item.name.common} />
                                 <h1 className='name-flag'>{item.name.common}</h1>
                             </article>
                         </div>
                     )) }
                  </div>
              </section> 

           </>
    );
};
export default Container;