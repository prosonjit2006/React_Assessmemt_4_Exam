import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  searchTerm: string;
  selectedCategory: string;
  sortOrder: "asc" | "desc" | "";
}

const initialState: ProductState = {
  searchTerm: "",
  selectedCategory: "all",
  sortOrder: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"asc" | "desc" | "">) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSearchTerm, setCategory, setSortOrder } =
  productSlice.actions;
export default productSlice.reducer;
