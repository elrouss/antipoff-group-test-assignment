import { createSlice } from '@reduxjs/toolkit';

const initialState = { selectedTeamMembers: [] };

const selectedTeamMembersSlice = createSlice({
  name: 'selectedTeamMembers',
  initialState,
  reducers: {
    setInitialSelectedCards(state, { payload }) {
      state.selectedTeamMembers = payload;
    },

    addCard(state, { payload }) {
      state.selectedTeamMembers.push(payload);

      // TODO (refactor): as a side effect it will be better in middleware
      localStorage.setItem(
        'selectedTeamMembers',
        JSON.stringify(state.selectedTeamMembers)
      );
    },

    removeCard(state, { payload }) {
      state.selectedTeamMembers = state.selectedTeamMembers.filter(
        (member) => member.id !== payload.id
      );

      // TODO (refactor): as a side effect it will be better in middleware
      localStorage.setItem(
        'selectedTeamMembers',
        JSON.stringify(state.selectedTeamMembers)
      );
    },
  },
});

export const { setInitialSelectedCards, addCard, removeCard } =
  selectedTeamMembersSlice.actions;
export default selectedTeamMembersSlice.reducer;
