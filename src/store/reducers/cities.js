import { createReducer } from '@reduxjs/toolkit';
import city_actions from "../actions/cities.js"

const { read_carousel, read_cities, read_city } = city_actions;

const initial_state = {
    carousel: [],
    cities: [],
    city: {}
}

const city_reducer = createReducer (
    initial_state,
    (builder) => builder
        .addCase(
            read_carousel.fulfilled,
            (state, action) => {
                let new_state = { 
                    ...state,
                    carousel: action.payload.carousel
                }
                return new_state;
            }
        )
        .addCase (
            read_cities.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    cities: action.payload.cities
                }
                return new_state
            }
        )
        .addCase (
            read_city.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    city: action.payload.city
                }
                return new_state
            }
        )
        

)

export default city_reducer