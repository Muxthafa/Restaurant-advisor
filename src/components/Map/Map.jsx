import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@mui/material";
import { PaperStyled, TypographyStyled } from "./styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Map = ({
  setCoordinates,
  coordinates,
  setBounds,
  currentLoc,
  places,
  setChildClicked,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div style={{ height: "85vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDdYEfnPNCJfR6QvqmA9qTt6an7SKM-f9o" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          console.log(child);
          setChildClicked(child);
        }}
      >
        {places?.map((place) => (
          <div
            style={{ height: "85vh", width: "100%" }}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="medium" />
            ) : (
              <PaperStyled elevation={3}>
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                <TypographyStyled variant="subtitle3" gutterBottom>
                  {place.name}
                </TypographyStyled>
              </PaperStyled>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
