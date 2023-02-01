import React from "react";
import LibraryPages from "../Components/MiddleComponent/LibraryPagesComp/LibraryPages";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

const Artists = () => {
  return (
    <div>
      <LibraryPages
        btntitle="Find artists"
        title="Follow your first artist"
        icon={<PersonSearchOutlinedIcon fontSize="large" />}
        description="Follow artists you like tapping the follow button"
      />
    </div>
  );
};

export default Artists;
