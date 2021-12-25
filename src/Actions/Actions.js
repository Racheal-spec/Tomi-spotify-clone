import axios from "axios";
import { PLAYLIST, PLAYLIST_URL, PLAYURL, USER_URL } from "../ApiUrl";

export const loadPlaylists = () => async (dispatch) => {
  const getPlaylists = await axios.get(PLAYLIST_URL, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  dispatch({
    type: "FETCH_PLAYLISTS",
    payload: {
      Playlists: getPlaylists.data.items,
    },
  });
};

export const loadUser = () => async (dispatch) => {
  const getUser = await axios.get(USER_URL, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  dispatch({
    type: "FETCH_USER",
    payload: {
      User: getUser.data,
    },
  });
};

export const fetchDetails = (playlist_id) => async (dispatch) => {
  const getDetails = await axios.get(PLAYLIST(playlist_id), {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      Playlist: getDetails.data,
    },
  });
};

export const togglePlayer = () => {
  return {
    type: "PLAY_SONG",
  };
};
