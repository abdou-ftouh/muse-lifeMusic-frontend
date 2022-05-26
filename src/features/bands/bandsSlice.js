import { bands } from "../../seeds";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let url;  // axios call to backend url

const initialState = bands;
// console.log(initialState);

// const initialState = async () => {
//     try {
//         // retrieve full list of bands from backend => return array of objects
//     } catch (error) {
        
//     }
// }

export const bandsSlice = createSlice({
    name: 'bands',
    initialState,
    reducers: { //all actions to happen involoing bands => CRUD & filters

        // ---- CREATE: pass bandForm data to server ----
        createBand: (state) => {
            // send the data to the backend to be restructured
        },

        // ---- READ: retrieve band data from server ----
        getBands: (state) => {
            // update the state of the bandlist
        },

        // ---- UPDATE: pass band id to server ----
        updateBand: (state, id) => {
            // send to update route
            // hit the patch route
            // update the state of the band
        },

        // ---- DELETE: ----
        deleteBand: (state, id) => {
            // hit delete route and return updated bandlist
            // update the state of the band
        },

        // ---- FILTER: ----
        filterBands: (state) => {
            // pass the query params to the server
        }
        
    }
})

export const allBands = (state) => state.bands;

// Deconstructed list of actions to be Dispatched from other components. => SEND UP TO global state and affect our list
export const { filterBy } = bandsSlice.actions;

// export default to the store's global state => "useSelector" can BRING DOWN the state from any App component
export default bandsSlice.reducer;