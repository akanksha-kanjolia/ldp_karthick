import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from '../organisms/book_card/book_card';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '56rem',
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    align: 'center',
  },
}));

export default function NestedGrid(props) {
  const classes = useStyles();
  const { children } = props;
  const getBookCard = book => {
    return (
      <Grid item xs={12} sm={4}>
        <BookCard {...book} />
      </Grid>
    )
  };

  return (
    <Grid container spacing={1} className={classes.root}>
      {children.map(book => getBookCard(book))}
    </Grid>
  )
}
