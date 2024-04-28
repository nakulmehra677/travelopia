import { createTheme } from "@mui/material/styles";
import { BACKGROUND, PRIMARY } from "./color";

const theme = createTheme({
  palette: {
    background: {
      default: BACKGROUND.MAIN,
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            backgroundColor: PRIMARY.MAIN,
            color: "white",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
