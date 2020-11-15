import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Share from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles({
  buttonColor: {
    color: purple
  }
});

const CreateCard = (props) => {
  const classes = useStyles();
  const { title, price, description, avatarUrl, imageUrl } = props;

  return (
    <Card spacing={2}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <Share />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia
        style={{ height: "150px" }}
        image={imageUrl}
        title="Paella dish"
      />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color={classes.buttonColor}>
          Buy Now
        </Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default CreateCard;
