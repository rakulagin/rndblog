import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    shadows: ["none"],
    palette: {
        primary: {
            main: "#cc0033",
        },
        secondary: {
            main: "#ffffff"
        }
    },
    typography: {
        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },
});
