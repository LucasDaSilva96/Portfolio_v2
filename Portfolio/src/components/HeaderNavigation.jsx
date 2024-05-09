import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PageviewIcon from "@mui/icons-material/Pageview";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import { getTabIndex, setTabIndex } from "../redux/tabSlice";
import { useNavigate } from "react-router-dom";

export default function HeaderNavigationTabs() {
  const tabIndex = useSelector(getTabIndex);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    dispatch(setTabIndex(newValue));

    switch (newValue) {
      case 0:
        navigate("/");
        break;

      case 1:
        navigate("portfolio");
        break;

      case 2:
        navigate("about");
        break;

      case 3:
        navigate("contact");
        break;

      default:
        null;
        break;
    }
  };

  return (
    <Tabs
      value={tabIndex}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab icon={<HomeIcon />} label="Home" />
      <Tab icon={<PageviewIcon />} label="Portfolio" />
      <Tab icon={<EmojiPeopleIcon />} label="About" />
      <Tab icon={<ContactMailIcon />} label="Contact" />
    </Tabs>
  );
}
