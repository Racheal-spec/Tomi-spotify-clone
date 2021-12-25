const initialState = {
  Playlists: [],
  User: null,
  TrackId: null,
  isPlaying: false,
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

    case "ISPLAYING":
      return {
        ...state,
        isPlaying: true,
      };
    case "TRACKID":
      return {
        ...state,
        TrackId: action.payload.TrackId,
      };
    default:
      return state;
  }
};

export default Reducer;
