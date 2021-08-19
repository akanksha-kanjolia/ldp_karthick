import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const CardTop = ({ book }) => {
  const useStyles = makeStyles({
    cardTop: {
      height: '250px',
      padding: '15px',
      backgroundSize: 'cover',
      color: '#fff',
      backgroundImage: 'url(' + book.image + ')'
    },
  });
  const classes = useStyles();
  return (
    <header className={classes.cardTop}>
    </header>
  );
};

export default CardTop;