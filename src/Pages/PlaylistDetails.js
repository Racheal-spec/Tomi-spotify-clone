import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../Actions/Actions";

const PlaylistDetails = ({ playlist_id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(playlist_id));
  }, [dispatch, playlist_id]);

  const Details = useSelector((state) => state.music.Playlist);
  console.log(Details);

  return (
    <div>
      <p> {Details.name}</p>
    </div>
  );
};

export default PlaylistDetails;
