export const changeAuthState = (state, payload) => {
  return (state.context.currentUser = payload);
};
