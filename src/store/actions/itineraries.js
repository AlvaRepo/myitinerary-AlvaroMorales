import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl  from "../../apiUrl.js";
const read_itineraries_by_city = createAsyncThunk(
    'read_itineraries_by_city',
    async(obj)=>{
        try {
            let data = await axios (apiUrl+'itineraries?city_id='+obj.city_id)
            console.log(data.data.response)
            return {
                itineraries_by_city: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                itineraries_by_city: []
            }
        }
    }
)

const itinerary_actions = { read_itineraries_by_city};
export default itinerary_actions;