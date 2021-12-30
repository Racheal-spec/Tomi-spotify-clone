import { TOPTRACKS } from "../ApiUrl";

const initialState = {
  Playlists: [],
  User: null,
  Toptracks: [],
  isPlaying: false,
  trackId: null,
  Newreleases: null,
  Featuredplaylists: null,
  Recentlyplayed: [],
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
    case "FETCH_RECENTLYPLAYED":
      return {
        ...state,
        Recentlyplayed: action.payload.Recentlyplayed,
      };
    case "TOPTRACKS":
      return {
        ...state,
        Toptracks: action.payload.Toptracks,
      };
    case "PLAYSONG":
      return {
        ...state,
        isPlaying: true,
      };
    case "TRACKID":
      return {
        ...state,
        trackId: state.trackId,
      };
    default:
      return state;
  }
};

export default Reducer;
