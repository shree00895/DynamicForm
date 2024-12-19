import React, { useState } from "react";
import { ThemeProvider, createTheme, Switch } from "@mui/material";
import { CssBaseline } from "@mui/material";

const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      Theme <Switch checked={mode} onChange={handleChange} />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
