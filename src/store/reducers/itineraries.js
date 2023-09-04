import { createReducer } from '@reduxjs/toolkit';
import city_actions from "../actions/cities.js"
import itinerary_actions from '../actions/itineraries.js';

const { read_itineraries_by_city } = itinerary_actions;

const initial_state = {
    itineraries_by_city: []
}

const itinerary_reducer = createReducer (
    initial_state,
    (builder) => builder
        .addCase(
            read_itineraries_by_city.fulfilled,
            (state, action) => {
                let new_state = { 
                    ...state,
                    itineraries_by_city: action.payload.itineraries_by_city
                }
                return new_state;
            }
        )
        

)

export default itinerary_reducer