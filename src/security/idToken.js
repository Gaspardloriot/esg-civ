export const idTokenFunc = (state, payload) => {
  return (state.context.idToken = payload);
};
