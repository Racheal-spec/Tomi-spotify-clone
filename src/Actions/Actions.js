export const loadPlaylists = (Playlists) => {
  return {
    type: "FETCH_PLAYLISTS",
    payload: Playlists,
  };
};

export const loadUser = (User) => {
  return {
    type: "FETCH_USER",
    payload: User,
  };
};

export const fetchToken = (Token) => {
  return {
    type: "FETCH_USER",
    payload: Token,
  };
};
