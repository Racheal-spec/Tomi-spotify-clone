import React from "react";
import LibraryPages from "../Components/MiddleComponent/LibraryPagesComp/LibraryPages";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";

const Podcasts = () => {
  return (
    <div>
      <LibraryPages
        btntitle="Find Podcasts"
        title="Follow your first podcast"
        icon={<PodcastsOutlinedIcon fontSize="large" />}
        description="Follow podcasts you like tapping the follow button"
      />
    </div>
  );
};

export default Podcasts;
