// React component for managing app layout and color theme
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import * as React from "react";
import Navigation from "../components/Navigation";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTheme } from "../redux/themeSlice";
import Toggle from "../components/Toggle";
import HeaderNavigationTabs from "../components/HeaderNavigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Background from "../components/Background";

// Main application component
function MyApp() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        paddingTop: "5px",
      }}
    >
      <div className=" z-50 w-full flex items-center justify-center ">
        <div className="flex items-center gap-12 backdrop-blur-xl shadow-xl rounded-3xl ">
          <LazyLoadImage
            src="/img/Logo.png"
            alt="logo"
            effect="blur"
            className="max-w-[160px] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />

          <div className="hidden md:block">
            <HeaderNavigationTabs />
          </div>
          <Toggle />
        </div>
      </div>
      <Navigation />

      <section className="z-40">
        <Outlet />
      </section>
      <Background />
    </Box>
  );
}

// Layout component
export default function Layout() {
  const mode = useSelector(getTheme);

  // Create theme based on color mode
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
      }),
    [mode]
  );

  // Render Layout with color mode context and theme provider
  return (
    <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider>
  );
}
