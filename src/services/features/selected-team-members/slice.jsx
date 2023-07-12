import { createSlice } from '@reduxjs/toolkit';

const initialState = { selectedTeamMembers: [] };

const selectedTeamMembersSlice = createSlice({
  name: 'selectedTeamMembers',
  initialState,
  reducers: {
    addCard(state, { payload }) {
      state.selectedTeamMembers.push(payload);
    },

    removeCard(state, { payload }) {
      state.selectedTeamMembers = state.selectedTeamMembers.filter(
        (member) => member.id !== payload.id
      );
    },
  },
});

export const { addCard, removeCard } = selectedTeamMembersSlice.actions;
export default selectedTeamMembersSlice.reducer;
