import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    loading: false,
    errors: false,
    recipes: [],
  },
  reducers: {
    getRecipes: (state, action) => {
      state.loading = true;
    },
    getRecipesSuccess: (state, action) => {
      state.loading = false;
      state.errors = false;
      state.recipes = action.payload;
    },
    getRecipesFailure: (state, action) => {
      state.loading = false;
      state.errors = true;
    },
  },
});

export const {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
} = recipeSlice.actions;

export default recipeSlice.reducer;
