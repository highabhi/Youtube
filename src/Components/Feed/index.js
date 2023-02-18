import React, { useState, useEffect } from "react";
import "./feed.css";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "../Sidebar";
import Videos from "./Video/Videos";
import { api } from "../utils/api";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("Latest");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "91vh" },
          px: { sx: "0", md: "3" },
          borderRight: "1px solid black",
          p: "15px",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setselectedCategory}
        />
        <Typography>Copyright</Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h5"
          mb={2}
          sx={{
            fontVariant: "small-caps",
            fontWeight: "bold",
            // position: "sticky",
            // top: "0",
          }}
        >
          {selectedCategory} &nbsp;
          <span>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
