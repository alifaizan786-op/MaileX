import { React, useState } from "react";
import { teal } from "@mui/material/colors";
import { Forward } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField, OutlinedInput, InputAdornment, Button, CardActions, Card } from '@mui/material';


import { useMutation } from '@apollo/client';
import { ADD_EMAIL } from '../../utils/mutations';


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



export default function Email(props) {
  const [formState, setFormState] = useState({
    recipientemail:'',
    subject:'',
    emailbody:''
  })
  
  const addEmail = useMutation(ADD_EMAIL);

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
                value={props.totextbox || formState.recipientemail}
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
                />
      <TextField
          sx={{ mt: 1}}
          label="Email Body"
          name='emailbody'
          multiline
          fullWidth
          onChange={handleChange}
          value={props.forwardstring || formState.emailbody}
          rows={4}
        />
      <CardActions>
        <Button onClick={handleFormSubmit}>
          <Forward />
          Send
        </Button>
      </CardActions>
    </Card>
  );
}
