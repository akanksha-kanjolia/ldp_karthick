import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Text from "../../atoms/text/text";
import ReadTime from "../../molecules/book_description/read_time";
import { CardMedia } from "@material-ui/core";
import Button from "../../atoms/button/button";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 330,
    },
});

const BookCard = props => {
    const classes = useStyles();
    const { image, name, author, nametext, authortext, timetext, button } = props;
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={image} />
            <CardContent >
                <Text {...nametext}>
                    {name}
                </Text>
                <Text {...authortext}>
                    {author}
                </Text>
                <ReadTime {...timetext}>{timetext}
                </ReadTime>
            </CardContent>
            <CardActions>
                <Button {...button}>Finish</Button>
            </CardActions>
        </Card>
    );
};

export default BookCard;