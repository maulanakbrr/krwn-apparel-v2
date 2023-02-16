import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const initialState = {
  categoriesMap: [],
  isLoading: false
}

export const fetchCategoriesAndDocuments = createAsyncThunk(
  'categories/fetchData',
  async () => {
    const categoryMap = await getCategoriesAndDocuments()
    return categoryMap
  }
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategoriesAndDocuments.pending, state => {
      if(!state.isLoading) {
        state.isLoading = true
        state.categoriesMap = []
      }
    })
    .addCase(fetchCategoriesAndDocuments.fulfilled, (state, action) => {
      if(state.isLoading){
        state.isLoading = false
        state.categoriesMap = action.payload
      }
    })
    .addCase(fetchCategoriesAndDocuments.rejected, state => {
      if (state.isLoading){
        state.isLoading = false
      }
    })
  }
})

export default categoriesSlice.reducer