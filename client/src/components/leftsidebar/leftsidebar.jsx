import React, { useState } from "react";
import "../leftsidebar/leftsidebar.css";
import { alpha, InputBase, makeStyles } from "@material-ui/core";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Drafts, Logout, Send, Settings } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  sidebarPadding: {
    paddingTop: "60px",
  },
  root: {
    "& .MuiPaper-root": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
  breakpoints: {
    values: {
      sm: 640,
      md: 1007,
      lg: 1280,
      xl: 1536,
    },
  },
  drawer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

function Leftsidebar(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const classes = useStyles();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <ThemeProvider theme={theme}>
      <Drawer variant="permanent" open={props.current} className={classes.root}>
        <List className={classes.sidebarPadding}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary="Sent Mail" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </List>

        <List>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Avatar
                alt="user img"
                src="https://raw.githubusercontent.com/alifaizan786-op/Full_Stack_Portfolio/main/assets/images/placeholder.png"
              />
            </ListItemIcon>
            <ListItemText primary="Farid Virani" />
          </ListItemButton>
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default Leftsidebar;
