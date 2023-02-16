import { createSelector } from "reselect";

const selectCategoriesReducer = state => state.categories

export const selectCategoriesMap = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesMap
);