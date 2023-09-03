import React, { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link as Anchor } from "react-router-dom";
import {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux" 
import city_actions from '../store/actions/cities.js';
import CardCity from '../components/CardCity.jsx';

const { read_city } = city_actions;

const CityDetail = () => {
  const { city_id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch (read_city({ id:city_id }))
  }, []);
  const city = useSelector(store => store.cities.city) 
  console.log(city)
  const text = []


  return (
    <div className='flex-row text-xl items-center justify-center text-center'>

      <CardCity src={city.photo} alt={city.name} txtdesc={city.city} c_id={city_id} />

    </div>
    
  );
};

export default CityDetail;