import React from 'react'
import './Navbar.css'
import { Stack, Typography } from "@mui/material";
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <Stack 
            direction="row"
            alignItems="center"
            className="Nav-container"
        >
            <Link to='/'>
                <Typography h2>HighAbhi</Typography>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar