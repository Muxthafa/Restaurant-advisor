import React, { useState, useEffect, createRef } from "react";
import {
  Grid,
  Select,
  FormControl,
  CircularProgress,
  Typography,
  InputLabel,
  MenuItem,
  Card,
} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { FormControlStyled } from "./styles";

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div style={{ padding: "25px" }}>
      <Typography variant="h4">Restaurants Around you</Typography>
      {isLoading ? (
        <div
          style={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControlStyled variant="standard">
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
            </Select>
          </FormControlStyled>
          <FormControlStyled variant="standard">
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All Ratings</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControlStyled>
          <Grid
            container
            spacing={3}
            style={{ height: "75vh", overflow: "auto" }}
          >
            {places?.map((place, index) => (
              <Grid ref={elRefs[index]} item key={index} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === index}
                  refProp={elRefs[index]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
