import React, { useEffect, useState } from 'react'
import Sidebar from '../utils/main/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NutritionSearchResults from '../utils/nutrition/NutritionSearchResults'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NutritionSearchEngine() {
  const apiKey = process.env.REACT_APP_NUTRITION_API_KEY
  const [nutrition, setNutrition] = useState('');
  const [query, setQuery] = useState('');
  const Navigate = useNavigate();

  useEffect(() => {
    if (query !== '') {
      axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
        params: {
          api_key:apiKey,
          query: query,
        }
      })
      .then(response => {
        setNutrition(response.data.foods[0]);
        console.log(nutrition)

      })
      .catch(error => {
        console.log(error);
      })
    }
  }, [query]);

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem('token');
    const isCalculatedBmi = !!localStorage.getItem('user_dietName');

    if (!isAuthenticated) {
        Navigate('/register');
    }
    if (!isCalculatedBmi){
      Navigate('bmicalculator');
    }
}, [])

  // handle input change (searching)
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const dietName = localStorage.getItem('user_dietName')

  return (
    <div className='h-screen w-full bg-slate-950'>
      <Sidebar />
    
      <div className="search-header flex justify-center">
        <h2 className='text-white text-5xl font-semibold my-8'>Your diet is <br /><span className='text-blue-500 flex justify-center text-6xl'>{dietName}</span></h2>
      </div>

      <div className="search-input flex justify-center">
        <input 
          type="text" 
          className='w-[70%] h-[32px] rounded-lg bg-inherit border border-2 border-white text-center text-white' 
          placeholder='searching for food nutrition ...' 
          onChange={handleInputChange} 
          value={query}  
        />
        <FontAwesomeIcon 
          icon={faSearch}  
          size="lg" 
          color="#fff" 
          className='absolute end-[16.1%] top-[46%] hover:text-blue-400 duration-200 ease-in-out'
          onClick={() => setQuery(query)} 
        />
      </div>


          <div className="search-results flex justify-center my-10 w-screen">
            {
              nutrition && nutrition.foodNutrients.length > 3 && (
                <NutritionSearchResults 
              name={nutrition.description}
              calories={nutrition.foodNutrients[3].value} 
              protiens={nutrition.foodNutrients[0].value} 
              fat={nutrition.foodNutrients[1].value}
            /> 
              ) 
              
            }
          </div>
    </div>
  )
}

export default NutritionSearchEngine