import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export type CategoryItem = {
  id: number
  imageUrl: string
  name: string
  price: number
}

export type Category = {
  title: string
  items: CategoryItem[]
}

export type CategoriesType = {
  readonly categoriesMap: Category[];
  readonly isLoading: Boolean;
}

// this is CategoryMap type
// export type CategoryMap = {
//   [key: string]: string
// }

const initialState: CategoriesType = {
  categoriesMap: [],
  isLoading: false
}

export const fetchCategoriesAndDocuments = createAsyncThunk(
  'categories/fetchData',
  async () => {
    const categoryMap = await getCategoriesAndDocuments()
    return Object.keys(categoryMap).map(key => ({
      title: key,
      items: categoryMap[key as keyof typeof categoryMap]
    }))
  }
)

export function setCategoriesMap(key: string): any {
  
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategoriesAndDocuments.pending, (state) => {
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
    .addCase(fetchCategoriesAndDocuments.rejected, (state) => {
      if (state.isLoading){
        state.isLoading = false
      }
    })
  }
})

export default categoriesSlice.reducer