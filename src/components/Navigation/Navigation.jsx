import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { TypographyStyled, Search, Icon, Input } from "./styles";

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TypographyStyled variant="h5">Restaurant Advisor</TypographyStyled>
        <Box display="flex" alignItems="center">
          <TypographyStyled variant="h6">Explore Restaurants</TypographyStyled>
          {/* <Autocomplete> */}
          <Search>
            <Icon>
              <SearchIcon />
            </Icon>
            <Input placeholder="Search..." />
          </Search>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
