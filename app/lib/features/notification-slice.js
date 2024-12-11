import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notificationStatus: "",
  },

  reducers: {
    showNotification(state, action) {
      state.notificationStatus = action.payload;
    },
  },
});

export const { showNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
