import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Text from "../../atoms/text/text";
import Button from "../../atoms/button/button";
import Clock from "../../atoms/icon/clock";

const useStyles = makeStyles({
    cardBottom: {
        position: 'relative',
        padding: '0px 15px',
        backgroundColor: '#fff',
        border: '1px solid #d4d4d4',
        height: '190px',
        borderTop: "0",
    },
    buttonCss: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        borderTop: '1px solid #BAC8CE',
        padding: "1rem 0",
    }
});

const CardBottom = ({ book, eventListener }) => {
    const classes = useStyles();
    return (
        <div className={classes.cardBottom}>
            <Text variant='h6'>
                {book.name}
            </Text>
            <Text variant='subtitle1' className="content-overflow">
                {book.author}
            </Text>
            <Text variant='body1'><Clock /> {book.time}-minute read</Text>
            <Button className={classes.buttonCss} fullWidth="true" onClick={() => eventListener(book)} children={book.value === 0 ? "Finished" : "Read Again"} />
        </div>

    );
};

export default CardBottom;