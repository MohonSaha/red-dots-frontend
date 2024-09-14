"use client";

import { selectClasses } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface Donor {
  id: string;
  name: string;
}

const donorSlice = createSlice({
  name: "donor",
  initialState: [],
  reducers: {
    addDonor: (state: Donor[], action: PayloadAction<Donor>) => {
      const item = action.payload;
      const index = state.findIndex((donor) => donor.id === item.id);

      if (index === -1) {
        // Item is not in the state array, so add it
        state.push(item);
      } else {
        // Item is already in the state array, so remove it
        state.splice(index, 1);
      }
    },
    removeDonor: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addDonor, removeDonor } = donorSlice.actions;
export default donorSlice.reducer;
