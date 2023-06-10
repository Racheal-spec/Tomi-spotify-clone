import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchDetails } from "../Actions/Actions";
import DetailsPage from "../Components/DetailsPage";
import SongList from "../Components/SongList";

const PlaylistDetails = () => {
  const id = useParams().playlist_id;

  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(fetchDetails({ playlist_id: id }));
    setLoad(false);
  }, [dispatch, id]);

  const Details = useSelector((state) => state.details.Playlist);

  const User = useSelector((state) => state.music.User);

  return (
    <div>
      {load ? (
        <Typography variant="h3">Loading...</Typography>
      ) : (
        <DetailsPage
          images={Details?.images?.[0]?.url}
          pagetitle="PLAYLIST"
          detailsname={Details?.name}
          userimage={User?.images === [] ? "" : User?.images[0]?.url}
          songdisplayname={Details?.owner.display_name}
          totaltracks={Details?.tracks.total}
          array={Details?.tracks.items}
          detailsid={Details?.id}
          releasedate=""
        />
      )}
      <Box
        sx={{
          padding: "20px 30px",
        }}
      >
        {Details?.tracks.items?.map((item, index) => (
          <div key={item.id}>
            <SongList
              key={item.id}
              track={item.track}
              list={index}
              trackuri={item.track.uri}
            />
          </div>
        ))}
      </Box>
    </div>
  );
};

export default PlaylistDetails;
