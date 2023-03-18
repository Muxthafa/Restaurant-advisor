import { styled } from "@mui/material/styles";
import { FormControl } from "@mui/material";

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));
