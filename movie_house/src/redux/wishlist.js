import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    items:[],
};
export const wishlistSlice = createSlice({
name:'wishlist',
initialState,
reducers:{
    addToWishlist:(state,action)=>{
        const movie = action.payload;
        const exists = state.items.find((m)=>m.id===movie.id);
        if(!exists) state.items.push(movie);

    },
    removeFromWishlist:(state,action)=>{
        const movieId = action.payload;
        state.items = state.items.filter(i=>i.id!==movieId);
    },
    togglewishlist:(state,action)=>{
        const movie= action.payload;
        const exists = state.items.find(m=>m.id===movie.id);
        if(exists){
            state.items= state.items.filter(m=>m.id!==movie.id);
        }else {
        state.items.push(movie);
      }
    }
}
});
export const { addToWishlist, removeFromWishlist, toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;