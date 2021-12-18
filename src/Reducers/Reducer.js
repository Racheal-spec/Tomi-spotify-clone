const initialState = {
  Playlists: [],
  User: null,
  Token: null,
  Playlist: null,
  Playsong: {},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        User: action.payload.User,
      };
    case "FETCH_PLAYLISTS":
      return {
        ...state,
        Playlists: action.payload.Playlists,
      };
    case "FETCH_DETAILS":
      return {
        ...state,
        Playlist: action.payload.Playlist,
      };
    case "PLAY_SONG":
      return {
        ...state,
        Playsong: action.payload.Playsong,
      };
    default:
      return state;
  }
};

export default Reducer;
