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



export default function Post() {
  return (
    <Card sx={{ maxWidth: 1, marginTop: "50px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
            FV
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Introduction"
        subheader="Farid Virani<mharriston@mitre.org>"
        
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          Google Doodle honouring Parween Rahman on her birthday. Rahman was a
          social activist and director of the Orangi Pilot Project Research and
          Training Institute. She was murdered on 13 March 2013. #GoogleDoodle
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
