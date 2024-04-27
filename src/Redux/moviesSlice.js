import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null
    },
    reducers:{
        addMovies:(state,action)=>{
         state.nowPlayingMovies=action.payload;
        },
        addVideoTrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
}
)
export const {addMovies,addVideoTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;
