import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link as Anchor } from "react-router-dom";

const CityDetail = () => {
  const { c_id } = useParams(); // Obtener c_id de la URL
  const { search } = useLocation(); // Obtener la cadena de consulta de la URL
  const params = new URLSearchParams(search);
  const photo = params.get('photo'); // Obtener el valor de 'photo' de la cadena de consulta
  const text = params.get('name'); // Obtener el valor de 'text' de la cadena de consulta

  return (
    <div className='flex-row text-xl items-center justify-center text-center'>
      <div className='text-4xl'>UNDER CONSTRUCTION, BE PATIENT</div>
      <h1>CITIY DETAILS BY ID: {c_id}</h1>
      <img className="w-full"src={photo} alt="city img" />
      <p >{text}</p>
      <Anchor to='/city' className="bg-white animate-pulse font-semibold w-1/3 text-4xl lg:text-3xl 2xl:text-4xl">
  If you want to come back to Cities - CLICK HERE!
</Anchor>


    </div>
    
  );
};

export default CityDetail;