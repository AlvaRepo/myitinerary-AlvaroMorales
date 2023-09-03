import {configureStore} from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities.js";

export default configureStore({
    reducer: {
        cities: city_reducer,

    }
})