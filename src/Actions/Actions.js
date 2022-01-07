import axios from "axios";
import {
  FEATURED_PLAYLISTS,
  NEWRELEASES,
  PLAYLIST,
  PLAYLIST_URL,
  USER_URL,
} from "../ApiUrl";
import { getBearerToken } from "../Auth";

export const LoadUser = () => async (dispatch) => {
  if (window.location.hash) {
    const { access_token } = getBearerToken(window.location.hash);
    localStorage.setItem("token", access_token);

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
  }
  window.location.hash = "";
};

export const loadPlaylists = () => async (dispatch) => {
  if (window.location.hash) {
    const { access_token } = getBearerToken(window.location.hash);
    localStorage.setItem("token", access_token);

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
  }
  window.location.hash = "";
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

export const fetchNewReleases = () => async (dispatch) => {
  if (window.location.hash) {
    const { access_token } = getBearerToken(window.location.hash);
    localStorage.setItem("token", access_token);
    const getNewReleases = await axios.get(NEWRELEASES, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({
      type: "FETCH_NEWRELEASES",
      payload: {
        Newreleases: getNewReleases.data,
      },
    });
  }
  window.location.hash = "";
};

export const fetchFeaturedPlaylists = () => async (dispatch) => {
  if (window.location.hash) {
    const { access_token } = getBearerToken(window.location.hash);
    localStorage.setItem("token", access_token);

    const getFeaturedPlaylists = await axios.get(FEATURED_PLAYLISTS, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({
      type: "FETCH_FEATUREDPLAYLISTS",
      payload: {
        Featuredplaylists: getFeaturedPlaylists.data,
      },
    });
  }
  window.location.hash = "";
};
