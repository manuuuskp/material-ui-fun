import React, { Component } from "react";
import Content from "./Content";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item container>
          <Grid Item xs={false} sm={2}></Grid>
          <Grid Item sm={8}>
            <Content />
          </Grid>
          <Grid Item xs={false} sm={2}></Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
