import axios from "axios";
import {
  FEATURED_PLAYLISTS,
  NEWRELEASES,
  PLAYLIST,
  PLAYLIST_URL,
  RECENTLY_PLAYED,
  TOPTRACKS,
  USER_URL,
} from "../ApiUrl";

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

export const fetchNewReleases = () => async (dispatch) => {
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
};

export const fetchFeaturedPlaylists = () => async (dispatch) => {
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
};

export const fetchToptracks = () => async (dispatch) => {
  const getToptracks = await axios.get(TOPTRACKS, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  dispatch({
    type: "FETCH_RECENTLYPLAYED",
    payload: {
      Recentlyplayed: getToptracks.data,
    },
  });
};

export const fetchRecentlyPlayed = () => async (dispatch) => {
  const getRecentlyPlayed = await axios.get(RECENTLY_PLAYED, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  dispatch({
    type: "FETCH_RECENTLYPLAYED",
    payload: {
      Recentlyplayed: getRecentlyPlayed.data,
    },
  });
};
