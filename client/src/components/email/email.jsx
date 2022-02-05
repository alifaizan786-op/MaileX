import {React, useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { teal, grey } from "@mui/material/colors";
import {  Reply, Forward, Delete } from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

export default function Email() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    useEffect(() => {
        console.log(editorState);
      }, [editorState]);
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: 1, marginTop: "50px", boxShadow: 5, borderRadius: '16px', padding: '16px' }}>
        <OutlinedInput
                startAdornment={<InputAdornment position="start">To:</InputAdornment>}
                margin="normal"
                required
                fullWidth
                id="recipient"
                name="recipient"
                autoFocus
                />
        <OutlinedInput
                startAdornment={<InputAdornment position="start">Subject:</InputAdornment>}
                margin="normal"
                required
                fullWidth
                id="subject"
                name="subject"
                autoFocus
                />
      <CardContent>
      <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarOnFocus
        />
      </CardContent>
      <CardActions>
        <Button >
          <Forward />
          Send
        </Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
