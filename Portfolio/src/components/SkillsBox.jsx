import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { getTheme } from "../redux/themeSlice";
import ComputerIcon from "@mui/icons-material/Computer";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import HttpIcon from "@mui/icons-material/Http";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AppsIcon from "@mui/icons-material/Apps";
import TerminalIcon from "@mui/icons-material/Terminal";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import JavascriptIcon from "@mui/icons-material/Javascript";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import SourceIcon from "@mui/icons-material/Source";
import CssIcon from "@mui/icons-material/Css";
function SkillsBox({ obj, type }) {
  const theme = useSelector(getTheme);
  // Get the icon component based on the iconTitle
  const getIconComponent = (iconTitle) => {
    switch (iconTitle) {
      case "CodeIcon":
        return <ComputerIcon fontSize="large" />;
      case "TabletIcon":
        return <TabletAndroidIcon fontSize="large" />;
      case "HttpIcon":
        return <HttpIcon fontSize="large" />;
      case "ApiIcon":
        return <SyncAltIcon fontSize="large" />;

      case "ReactIcon":
        return <AppsIcon fontSize="large" />;

      case "ReduxIcon":
        return <TerminalIcon fontSize="large" />;

      case "QueryBuilderIcon":
        return <TerminalIcon fontSize="large" />;

      case "NodeIcon":
        return <SettingsSystemDaydreamIcon fontSize="large" />;

      case "JavaScriptIcon":
        return <JavascriptIcon fontSize="large" />;

      case "StyleIcon":
        return <CssIcon fontSize="large" />;

      //
      case "DesignServicesIcon":
        return <LineStyleIcon fontSize="large" />;

      case "AccessibilityIcon":
        return <AccessibilityIcon fontSize="large" />;

      case "SourceControlIcon":
        return <SourceIcon fontSize="large" />;

      default:
        return null;
    }
  };

  const height =
    type === "coding" ? "280px" : type === "soft" ? "350px" : "375px";

  const style =
    type === "coding"
      ? {
          bgcolor: "background.default",
          color: "text.primary",
          maxWidth: "200px",
          height: height,
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          borderRadius: "10px",
          justifyContent: "space-between",
          overflowY: "auto",
          filter:
            "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));",
        }
      : {
          bgcolor: "background.default",
          color: "text.primary",
          maxWidth: "200px",
          height: height,
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          borderRadius: "10px",
          justifyContent: "space-around",
          overflowY: "auto",
          filter:
            "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));",
        };

  return (
    <Box sx={style}>
      {getIconComponent(obj.iconTitle)}
      <h1 className="antialiased text-xl font-semibold tracking-wide sm:line-clamp-2 md:line-clamp-none text-center">
        {obj.title}
      </h1>
      <p className="antialiased text-base sm:line-clamp-6 md:line-clamp-none text-center  font-serif tracking-wide">
        {obj.text}
      </p>
    </Box>
  );
}

export default SkillsBox;
