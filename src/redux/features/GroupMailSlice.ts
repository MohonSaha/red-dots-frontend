import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Donor {
  id: string;
  name: string;
  email: string;
  // Add other fields as necessary
}

// Helper function to get state from local storage
const loadStateFromLocalStorage = (): Donor[] => {
  try {
    const serializedState = localStorage.getItem("selectedDonors");
    if (serializedState === null) {
      return []; // No donors in local storage, initialize with an empty array
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state from local storage", e);
    return [];
  }
};

// Helper function to save state to local storage
const saveStateToLocalStorage = (state: Donor[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("selectedDonors", serializedState);
  } catch (e) {
    console.error("Could not save state to local storage", e);
  }
};

// Initial state loaded from local storage
const initialState: Donor[] = loadStateFromLocalStorage();

const donorSlice = createSlice({
  name: "donors",
  initialState,
  reducers: {
    addDonor: (state, action: PayloadAction<Donor>) => {
      const item = action.payload;
      const index = state.findIndex((donor) => donor.id === item.id);

      if (index === -1) {
        // Item is not in the state array, so add it
        state.push(item);
      } else {
        // Item is already in the state array, so remove it
        state.splice(index, 1);
      }

      // Update local storage after adding/removing donor
      saveStateToLocalStorage(state);
    },
    removeDonor: (state, action: PayloadAction<string>) => {
      const updatedState = state.filter((item) => item.id !== action.payload);

      // Update local storage after removing donor
      saveStateToLocalStorage(updatedState);

      return updatedState; // Return the updated state array
    },
    // Optional: You can add a clearAllDonors action to reset the list
    clearAllDonors: (state) => {
      const clearedState: Donor[] = [];
      saveStateToLocalStorage(clearedState); // Clear local storage
      return clearedState;
    },
  },
});

export const { addDonor, removeDonor, clearAllDonors } = donorSlice.actions;
export default donorSlice.reducer;
