import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
  },
  card: {
    width: "100%",
    marginLeft: "15px",
    marginRight: "15px",
    margin: "auto",
    transition: "0.3s",
    minHeight: "270px",
    borderRadius: ".625rem!important",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  tittle: {
    "&:active": {
      color: "#00008E",
    },
  },
  cardContent: {
    minHeight: "120px",
  },
  cardActions: {
    padding: "16px",
  },
  dot: {
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    display: "inline-block",
  },
}));

const RepoCard = ({ repo, language }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title={
            <Typography variant="h6">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.title}
                style={{ textDecoration: "none", color: "#551A8B" }}
              >
                {repo.name}
              </a>{" "}
            </Typography>
          }
        />

        <CardContent className={classes.cardContent}>
          <Typography variant="body1">{repo.description}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {repo.language ? (
            <React.Fragment>
              <span
                className={classes.dot}
                style={{ backgroundColor: language[repo.language]["color"] }}
              ></span>
              <Typography style={{ marginRight: "10px" }}>
                {repo.language}
              </Typography>
            </React.Fragment>
          ) : null}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RepoCard;