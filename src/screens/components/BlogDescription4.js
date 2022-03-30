import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import blogImg4 from "../images/blog4.jpg";
import BlogData from "./BlogData";

const useStyles = makeStyles({
  heading: {
    fontStyle: "poppins",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "40px",
    margin: "20px 0 40px 0",
  },

  para: {
    fontStyle: "poppins",

    fontSize: "20px",
  },

  more: {
    fontFamily: "poppins",
    color: "#51B700",
    cursor: "pointer",
    marginLeft: "8px",
    fontSize: "18px",
  },
});

let theme = createMuiTheme();

export default function BlogDescription4() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container justify="center">
        <Grid spacing={10} item xs={10}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="blog"
                image={blogImg4}
                title="blog image"
                height="500px"
              />
              <CardContent>
                <ThemeProvider>
                  <Typography
                    className={classes.heading}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {BlogData[3].heading}
                  </Typography>
                </ThemeProvider>

                <ThemeProvider>
                  <Typography
                    className={classes.para}
                    variant="body2"
                    component="p"
                  >
                    {BlogData[3].info}
                  </Typography>
                </ThemeProvider>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
