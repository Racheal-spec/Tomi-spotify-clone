const initialState = {
  Playlists: [],
  User: null,
  Toptracks: [],
  isLoading: false,
  Newreleases: null,
  Featuredplaylists: null,
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
    case "FETCH_NEWRELEASES":
      return {
        ...state,
        Newreleases: action.payload.Newreleases,
      };
    case "FETCH_FEATUREDPLAYLISTS":
      return {
        ...state,
        Featuredplaylists: action.payload.Featuredplaylists,
      };

    case "ISLOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default Reducer;
