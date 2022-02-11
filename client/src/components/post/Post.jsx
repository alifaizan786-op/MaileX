//From React
import * as React from "react";

//From Material UI
import {Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Button, Typography} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { teal, grey } from "@mui/material/colors";
import {  Reply, Forward, Delete } from "@mui/icons-material";



export default function Post(props) {

  const fname = props.senderfname || ' '
  const lname = props.senderlname || ' '
  return (
    <Card sx={{ maxWidth: 1, marginTop: "50px", boxShadow: 5, borderRadius: '16px',backgroundColor:'rgba(255,255,255,0.97)' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: teal[500] }}>
            {`${fname[0]}${lname[0]}`}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.subject}
        subheader={`${props.senderfname} ${props.senderlname} <${props.senderemail}> ${props.sentDate}`}
        
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {props.emailbody}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button sx={{ color: grey[500] }}>
          <Reply  />
          Reply
        </Button>
        <Button sx={{ color: grey[500] }}>
          <Forward />
          Forward
        </Button>
        <Button sx={{ color: grey[500] }}>
          <Delete />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
