export const checkUserAuthStatus = (state) => state.user.isAuthChecked;
export const checkUserData = (state) => state.user.user;

export const isLoading = (state) => state.user.process.isLoading;
