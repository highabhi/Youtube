import React, { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import Loading from "./Loading";

const VideoPlayer = () => {
  const [videoPlayer, setVideoPlayer] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    api(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoPlayer(data.items[0])
    );

    api(`search?part=snipper&relatedToVideoId=${id}&type=video`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  if (!videoPlayer?.snippet) return <Loading />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoPlayer;

  return (
    <Box minHeight="60vh">
      <Stack xs={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "80px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#000" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#000" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: "h6", ml: "5px" }}>
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box> */}
      </Stack>
    </Box>
  );
};

export default VideoPlayer;
