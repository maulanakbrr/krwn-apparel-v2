import { createSelector } from "reselect";
import { CategoriesType } from "./categoriesSlice";
import { RootState } from "../store";

const selectCategoriesReducer = (state: RootState):CategoriesType => state.categories

export const selectCategoriesMap = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesMap
);

export const selectIsLoadingCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);