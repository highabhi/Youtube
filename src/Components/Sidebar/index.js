import React from "react";
import "./sidebar.css";
import { Stack } from "@mui/material";
import { categories } from "../utils/array";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        pt: 1,
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className="buttons"
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
