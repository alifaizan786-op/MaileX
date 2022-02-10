import {React, useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { teal, grey } from "@mui/material/colors";
import {  Reply, Forward, Delete } from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from '@mui/material/TextField';

import { useMutation } from '@apollo/client';
import { ADD_EMAIL } from '../../utils/mutations';
import Auth from '../../utils/auth';

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
  const [formState, setFormState] = useState({
    recipientemail:'',
    subject:'',
    emailbody:''
  })
  
  const [addEmail, { error, data }] = useMutation(ADD_EMAIL);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addEmail({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }

    setFormState({
      recipientemail: '',
      subject: '',
      emailbody: '',
    });
  };


  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: 1, marginTop: "50px", boxShadow: 5, borderRadius: '16px', padding: '16px' }}>
        <OutlinedInput
                sx={{ mt: 1}}
                startAdornment={<InputAdornment position="start">To:</InputAdornment>}
                margin="normal"
                required
                fullWidth
                id="recipient"
                name="recipientemail"
                onChange={handleChange}
                value={formState.recipientemail}
                autoFocus
                />
        <OutlinedInput
                sx={{ mt: 1}}
                startAdornment={<InputAdornment position="start">Subject:</InputAdornment>}
                margin="normal"
                required
                fullWidth
                id="subject"
                name="subject"
                onChange={handleChange}
                value={formState.subject}
                autoFocus
                />
      <TextField
          sx={{ mt: 1}}
          label="Email Body"
          name='emailbody'
          multiline
          fullWidth
          onChange={handleChange}
          value={formState.emailbody}
          rows={4}
        />
      <CardActions>
        <Button onClick={handleFormSubmit}>
          <Forward />
          Send
        </Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
