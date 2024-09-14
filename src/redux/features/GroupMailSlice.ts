"use client";

import { selectClasses } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

const donorSlice = createSlice({
  name: "donor",
  initialState: [],
  reducers: {
    addDonor: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeDonor: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addDonor, removeDonor } = donorSlice.actions;
export default donorSlice.reducer;
