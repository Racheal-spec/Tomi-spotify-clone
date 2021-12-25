const initialState = {
  Playlist: null,
};

const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        Playlist: action.payload.Playlist,
      };
    default:
      return state;
  }
};

export default DetailReducer;
