import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAlbumDetails } from "../Actions/Actions";
import AlbumSongList from "../Components/AlbumSongList";
import DetailsPage from "../Components/DetailsPage";
import SongList from "../Components/SongList";

const AlbumDetails = () => {
  const id = useParams().album_id;

  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(fetchAlbumDetails({ album_id: id }));
    setLoad(false);
  }, [dispatch, id]);

  const AlbumDetails = useSelector((state) => state.details.SingleAlbum);

  const User = useSelector((state) => state.music.User);

  console.log(AlbumDetails);

  return (
    <div>
      {load ? (
        <Typography variant="h3">Loading...</Typography>
      ) : (
        <DetailsPage
          images={AlbumDetails?.images?.[0]?.url}
          pagetitle="PLAYLIST"
          detailsname={AlbumDetails?.name}
          userimage={User?.images[0].url}
          songdisplayname={AlbumDetails?.name}
          totaltracks={AlbumDetails?.tracks.total}
          array={AlbumDetails?.tracks.items}
          detailsid={AlbumDetails?.id}
          releasedate={AlbumDetails?.release_date}
        />
      )}
      <Box
        sx={{
          padding: "20px 30px",
        }}
      >
        {AlbumDetails?.tracks.items?.map((item, index) => (
          <div key={item.id}>
            <AlbumSongList
              key={item.id}
              track={item}
              list={index}
              trackuri={item.uri}
            />
          </div>
        ))}
      </Box>
    </div>
  );
};

export default AlbumDetails;
