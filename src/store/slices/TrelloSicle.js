import { createSlice } from "@reduxjs/toolkit";

export const trelloSlice = createSlice({
  name: "trello",
  initialState: {
    tasks: [],
  },

  reducers: {
    addlist: (state, action) => {
      state.tasks.push(action.payload);
    },

    addCard: (state, action) => {
      state.tasks.map((item) => {
        if (item.id === action.payload.parrentId) {
          item.description.push(action.payload);
        } else {
        }
      });
    },
  },
});
export const { addlist, addCard } = trelloSlice.actions;
export default trelloSlice.reducer;
