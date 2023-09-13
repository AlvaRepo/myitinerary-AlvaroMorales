import {configureStore} from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities.js";
import itinerary_reducer from "./reducers/itineraries.js";
import user_reducer from "./reducers/users.js";


export default configureStore({
    reducer: {
        cities: city_reducer,
        itineraries: itinerary_reducer,
        users: user_reducer
    }
})