import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  // const [SachTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // const onhandleSubmit = (e) => {
  //   e.preventDefault();

  //   if (searchTerm) {
  //     navigate(`/srarch/${searchTerm}`);

  //     setSearchTerm("");
  //   }
  // };

  return (
    <Paper
      component="form"
      // onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 25,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        pl: 2,
        mr: { sm: 6 },
      }}
      onSubmit={() => {}}
    >
      <input
        className="searchbar"
        placeholder="search"
        value=""
        onChange={() => {}}
      />
      <IconButton>
        <SearchIcon type="submit" sx={{ p: "1px", color: "greenyellow" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
