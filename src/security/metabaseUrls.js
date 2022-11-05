import fetch from "node-fetch";

export const metabaseUrlsFunc = (state, payload) => {
  return (state.context.metabaseUrls = payload);
};

export const getMetabaseUrls = async (idToken) => {
  const response = await fetch(
    `https://8000-harlequin-hamster-afqe3xst.ws-eu23.gitpod.io/metabaseconfig/${idToken}`
  );

  const body = await response.json();

  return body;
};
