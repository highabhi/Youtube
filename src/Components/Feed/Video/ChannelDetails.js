import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { api } from "../../utils/api";

const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await api(`channels?part=snippet&id=${id}`);

      setChannelDetails(data?.items[0]);

      const videosData = await api(
        `search?channelId=${id}&part=snippet%2Cid&order=data`
      );

      setVideos(videosData?.items);
    };
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ height: "300px", backgroundColor: "green" }} />

        <ChannelCard channelDetails={channelDetails} marginTop="-95px" />
      </Box>
      3
    </Box>
  );
};

export default ChannelDetails;
