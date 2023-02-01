const initialState = {
  Playlists: [],
  User: null,
  Toptracks: [],
  isLoading: false,
  Newreleases: null,
  Searchedplaylists: [],
  Featuredplaylists: null,
  Albums: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        Token: action.payload.token,
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
    case "FETCH_SEARCHEDPLAYLISTS":
      return {
        ...state,
        Searchedplaylists: action.payload.Searchedplaylists,
      };

    case "ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_ALBUMS":
      return {
        ...state,
        Albums: action.payload.Albums,
      };

    default:
      return state;
  }
};

export default Reducer;
