const initialState = {
  Playlists: { items: [] },
  User: null,
  Token: null,
};

const Reducer = (state = initialState, { type, payload }) => {
  // console.log(action);

  switch (type) {
    case "FETCH_USER":
      return {
        ...state,
        User: payload,
      };
    case "FETCH_PLAYLISTS":
      return {
        ...state,
        Playlists: payload,
      };
    case "FETCH_TOKEN":
      return {
        ...state,
        Token: payload,
      };
    default:
      return state;
  }
};

export default Reducer;
