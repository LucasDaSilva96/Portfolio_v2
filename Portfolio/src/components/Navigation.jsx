// React component for navigation menu using Material-UI SpeedDial
import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import HomeIcon from "@mui/icons-material/Home";
import PageviewIcon from "@mui/icons-material/Pageview";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";

// Array of navigation actions with icons and names
const actions = [
  { icon: <HomeIcon />, name: "home" },
  { icon: <PageviewIcon />, name: "portfolio" },
  { icon: <EmojiPeopleIcon />, name: "about" },
  { icon: <ContactMailIcon />, name: "contact" },
];

// Navigation component
export default function Navigation() {
  // State for controlling SpeedDial open/close
  const [open, setOpen] = React.useState(false);

  // Function to handle opening SpeedDial
  const handleOpen = () => setOpen(true);

  // Function to handle closing SpeedDial
  const handleClose = () => setOpen(false);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle navigation based on action name
  const handleNavigation = (name) => {
    if (name === "home") {
      navigate("/");
      handleClose();
    } else {
      navigate(name);
      handleClose();
    }
  };

  // Render SpeedDial navigation menu
  return (
    <aside className="w-screen h-screen absolute bottom-2 right-1">
      <SpeedDial
        ariaLabel="navigation"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          transform: "translateZ(0px)",
        }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name.toLocaleUpperCase()}
            tooltipOpen
            onClick={() => handleNavigation(action.name)}
          />
        ))}
      </SpeedDial>
      {open && (
        <div className="fixed w-screen h-screen bottom-0 left-0 backdrop-blur-sm z-[41]"></div>
      )}
    </aside>
  );
}
