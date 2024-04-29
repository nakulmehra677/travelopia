import { createTheme } from "@mui/material/styles";
import { BACKGROUND, PRIMARY, SECONDARY } from "./color";

const theme = createTheme({
  palette: {
    background: {
      default: BACKGROUND.MAIN,
      gray: BACKGROUND.GRAY,
    },
    primary: {
      main: PRIMARY.MAIN,
    },
  },
  typography: {
    fontFamily: [
      "Rubik",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: 48,
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: `radial-gradient( circle farthest-corner at 1.9% 6.4%, ${PRIMARY.MAIN} 0%, ${SECONDARY.MAIN} 90% )`,
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          backgroundImage: `radial-gradient( circle farthest-corner at 1.9% 6.4%, ${PRIMARY.MAIN} 0%, ${SECONDARY.MAIN} 90% )`,
          textTransform: "none",
          borderRadius: 0,
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: 0,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        // disableGutters: true,
        maxWidth: "xl",
      },
      styleOverrides: {
        root: {
          paddingTop: 16,
          paddingBottom: 16,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            fontWeight: "bold",
          },
          ".MuiTableRow-body": {
            cursor: "pointer",
            ":hover": {
              background: BACKGROUND.GRAY,
            },
          },
        },
      },
    },
  },
});

export default theme;
