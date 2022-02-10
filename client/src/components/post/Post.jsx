import * as React from "react";
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
