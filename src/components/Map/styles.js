import { styled } from "@mui/material/styles";
import { Typography, InputBase, alpha, Paper } from "@mui/material";

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
}));
