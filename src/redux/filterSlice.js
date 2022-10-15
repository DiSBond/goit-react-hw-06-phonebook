const { createSlice } = require('@reduxjs/toolkit');

const filtertSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { filterContact } = filtertSlice.actions;
export const filterReucer = filtertSlice.reducer;
