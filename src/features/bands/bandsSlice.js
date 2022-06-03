import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const BANDS_URL = 'http://localhost:4000/bands'

const initialState = {
    bands: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
// ------------------------------------ CREATE ------------------------------------
// ------------------------------------ CREATE ------------------------------------

export const createBand = createAsyncThunk('bands/createBand', async (newBand) => {
    try {
        const response = await axios.post(BANDS_URL, newBand)
        // console.log('----ASYNC THUNK CREATE----')
        console.log(response.data)
        // getBands()
        return response.data
    } catch (error) {
        return error
    }
})

// ------------------------------------ GET ------------------------------------
// ------------------------------------ GET ------------------------------------

export const getBands = createAsyncThunk('bands/getBands', async () => {
    try {
        const response = await axios.get(BANDS_URL)
        // console.log('----ASYNC THUNK GET----')
        // console.log(response.data)
        return response.data
    } catch (error) {
        return(error.message)
    }
})

// ------------------------------------ UPDATE ------------------------------------
// ------------------------------------ UPDATE ------------------------------------

export const updateBand = createAsyncThunk('bands/updateBand', async (band) => {
    try {
        const updateBANDS_URL = `${BANDS_URL}/629a46c5c2e7b3aaf4ca5653`
        console.log(band)
        const response = await axios.patch(`http://localhost:4000/bands/${band._id}`, band)
        console.log('----ASYNC THUNK UPDATE----')
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return(error)
    }
})

export const bandsSlice = createSlice({
    name: 'bands',
    initialState,
    // reducers: { //all actions to happen involving bands => CRUD & filters
        // ---- CREATE: pass bandForm data to server ----
        // send the data to the backend to be restructured
        // createBand: {
        //     reducer(state, action) {
        //         state.push(action.payload)
        //         console.log(allBands)
        //     },
        //     prepare(formState) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 name: formState.bandName,
        //                 biography: formState.biography,
        //                 members: formState.members,
        //                 mediaLinks: formState.mediaLinks,
        //                 calendarType: formState.calendarType,
        //                 calendarID: formState.calendarID,
        //                 images: formState.images,
        //                 genres: formState.genres,
        //             }
        //         }
        //     }
        // },

        // ---- FILTER: ----
        // filterBands: (state) => {
        //     // pass the query params to the server
        // }
        
    // },
    extraReducers(builder) {
        builder
            .addCase(getBands.pending, (state, action) => {
                    state.status = 'loading'
            })
            .addCase(getBands.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload)
                state.bands = action.payload
            })
            .addCase(getBands.rejected, (state, action) => {
                state.status = 'failed'
                console.log(action.payload)
                state.error = action.error.message
            })
            .addCase(createBand.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log('--- CREATE BAND ----')
                console.log(action.payload)
                getBands()
            })
            .addCase(updateBand.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log('----- BANDSLICE UPDATE -----')
                state.bands.map(band => {
                    if (band._id === action.payload._id) {
                        band.likes = action.payload.likes
                    } else return 'NO BANDS FOUND'
                })
                console.log(allBands)
                getBands()
                console.log(action.payload)
            })
    }
})

export const allBands = (state) => state.bands.bands;
export const getBandsStatus = (state) => state.bands.status;
export const getBandsError = (state) => state.bands.error;

// Deconstructed list of actions to be Dispatched from other components. => SEND UP TO global state and affect our list
// export const { createBand, } = bandsSlice.actions;

// export default to the store's global state => "useSelector" can BRING DOWN the state from any App component
export default bandsSlice.reducer;