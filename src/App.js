import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Box from '@mui/material/Box'
import Feed from "./Components/Feed"

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
