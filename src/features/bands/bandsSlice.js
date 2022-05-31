import { bands } from "../../seeds";
import { createSlice, nanoid } from "@reduxjs/toolkit";
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
        // send the data to the backend to be restructured

        // createBand(state, action) {
        //     state.push(action.payload)
        // },
        createBand: {
            reducer(state, action) {
                state.push(action.payload)
                console.log(allBands)
            },
            prepare(formState) {
                return {
                    payload: {
                        id: nanoid(),
                        name: formState.bandName,
                        biography: formState.biography,
                        members: formState.members,
                        mediaLinks: formState.mediaLinks,
                        calendarType: formState.calendarType,
                        calendarID: formState.calendarID,
                        images: formState.images,
                        genres: formState.genres,
                    }
                }
            }
        },

        // ---- READ: retrieve band data from server ----
        getBands: (state) => {
            // update the state of the bandlist
            // GET route to server
        },

        // ---- UPDATE: pass band id to server ----
        updateBand: (state, id) => {
            // receive form data || likes
            // POST / PATCH route to server
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
export const { createBand } = bandsSlice.actions;

// export default to the store's global state => "useSelector" can BRING DOWN the state from any App component
export default bandsSlice.reducer;