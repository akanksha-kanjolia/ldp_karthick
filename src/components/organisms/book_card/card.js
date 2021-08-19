import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardTop from './card_top';
import CardBottom from './card_bottom';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
});

const BookCard = ({ book, eventListener }) => {
    const classes = useStyles();
    return (

        <Card className={classes.root}>
            <Link to={'/detail/1'}>
                <CardTop book={book} />
            </Link>
            <CardBottom book={book} eventListener={eventListener} />
        </Card>
    );
};

export default BookCard;