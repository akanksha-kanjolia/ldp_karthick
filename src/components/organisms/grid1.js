import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from '../organisms/book_card/book_card';
import MUIGrid from '@material-ui/core/Grid';

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

const Grid1 = (props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <MUIGrid container spacing={1} className={classes.root}>
      {children.map(book =>
        <MUIGrid item xs={12} sm={4}>
          <BookCard {...book}/>
        </MUIGrid>)}
    </MUIGrid>
  )
}

export default Grid1
