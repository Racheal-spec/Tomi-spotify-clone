import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../Actions/Actions";

const PlaylistDetails = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  const Details = useSelector((state) => state.music.Playlist);
  console.log(Details);
  return (
    <div>
      <p>Playlist details</p>
    </div>
  );
};

export default PlaylistDetails;
