import React from "react";
import Grid from "@material-ui/core/Grid";
import CreateCard from "./CreateCard";
import CoffeMakerList from "./constant";

const Content = () => {
  const coffeeMakerMethod = (coffeeMakeObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <CreateCard {...coffeeMakeObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {CoffeMakerList.map((coffeeObj) => {
        return coffeeMakerMethod(coffeeObj);
      })}
    </Grid>
  );
};

export default Content;
