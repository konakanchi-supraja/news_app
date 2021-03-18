import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NewsArticle({data}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h1>{data.title}</h1>
        </Typography>
        <Typography variant="h5" component="h2">
        <p>{data.description}</p>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <p>{data.author}</p>
        </Typography>
        <Typography variant="body2" component="p">
        <p>{data.publishedAt}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
/*

import React from "react";

function NewsArticle({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.author}</p>
      <p>{data.publishedAt}</p>
    </div>
  );
}

export default NewsArticle;*/
