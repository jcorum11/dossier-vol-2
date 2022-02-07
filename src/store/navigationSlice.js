import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    selectedTab: 'about'
  },
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload
    }
  }
})

export const selectSelectedTab = state => state.navigation.selectedTab

export const { setSelectedTab } = navigationSlice.actions

export default navigationSlice.reducer