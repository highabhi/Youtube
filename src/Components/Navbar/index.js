import React from 'react'
import './Navbar.css'
import { Stack } from "@mui/material";
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
        <Stack 
            direction="row"
            alignItems="center"
            className="Nav-container"
        >
            <h1>HIGHABHI</h1>
            <SearchBar />
        </Stack>
    )
}

export default Navbar