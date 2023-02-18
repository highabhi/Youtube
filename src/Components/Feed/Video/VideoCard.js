import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videoId, snippet)

  return (
    <Card
      className="VideoContainer"
      sx={{ width: { xs: "100%", sm: "350px", md: "300px" } }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { sx: "98%", sm: "345px" }, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : ``}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ``}>
            <Typography variant="subtitle2" color="gray">
              {snippet.channelTitle}
              <CheckCircleIcon
                sx={{
                  fontSize: "15px",
                  color: "gray",
                  ml: "5px",
                  // pt: "5px",
                }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
