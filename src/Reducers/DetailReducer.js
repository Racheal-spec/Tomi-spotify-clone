const initialState = {
  Playlist: null,
  SingleAlbum: null,
};

const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        Playlist: action.payload.Playlist,
      };
    case "FETCH_ALBUM_DETAILS":
      return {
        ...state,
        SingleAlbum: action.payload.SingleAlbum,
      };
    default:
      return state;
  }
};

export default DetailReducer;
