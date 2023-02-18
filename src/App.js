import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Box from "@mui/material/Box";
import Feed from "./Components/Feed";
import VideoPlayer from "./Components/Feed/Video/VideoPlayer";
import ChannelDetails from "./Components/Feed/Video/ChannelDetails";
import SearchFeed from "./Components/Feed/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
