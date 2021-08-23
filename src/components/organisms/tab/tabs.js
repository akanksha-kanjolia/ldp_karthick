import MUITabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from '../book_card/card';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    paper: {
        marginLeft: '0',
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
const { forwardRef, useImperativeHandle } = React;
const Tabs = forwardRef((props, ref) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [data1, setData1] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    useImperativeHandle(ref, () => ({
        addBook(book) {
            if (value === 0) {
                setData1([...data1, {
                    id: data1.length,
                    name: book.name,
                    author: book.author,
                    time: 13,
                    image: "https://images.blinkist.io/images/books/602698356cee070007691895/1_1/470.jpg"
                }])
            } else {
                setData2([...data2, {
                    id: data2.length,
                    name: "",
                    author: "",
                    time: 13,
                    image: "https://images.blinkist.io/images/books/602698356cee070007691895/1_1/470.jpg"
                }])
            }
        }
    }));

    const updateBook = (book) => {
        if (book.value === 0) {
            setData2([...data2, {
                id: data2.length,
                name: book.name,
                author: book.author,
                time: book.time,
                image: book.image,
                value: 1,
            }])
            const lists = data1.filter(x => {
                return x.id !== book.id;
            })
            setData1([...lists])
        } else {
            setData1([...data1, {
                id: data1.length,
                name: book.name,
                author: book.author,
                time: book.time,
                image: book.image,
                value: 0,
            }])
            const lists = data2.filter(x => {
                return x.id !== book.id;
            })
            setData2([...lists])
        }
    }

    useEffect(() => {
        var url;
        if (value === 0) {
            url = 'https://run.mocky.io/v3/520015d9-dacf-4cf1-a892-3e097c9f20d6';
        } else {
            url = 'https://run.mocky.io/v3/8e326477-dd39-4c96-81cb-ef3fb95c6c52';
        }
        axios.get(url).then(res => {
            const books = res.data.book;
            const newbooks = books.map(book => ({ ...book, value: value }));
            if (value === 0 && data1.length === 0) {
                setData1([...newbooks])
            } else if (value === 1 && data2.length === 0) {
                setData2([...newbooks])
            }
        });
    }, [value]);
    return (
        <div>
            <Container className={classes.paper} >
                <div className='midtext' >
                    <Typography variant='h4'>My Library</Typography>
                </div>
                <MUITabs value={value} className={classes.root} indicatorColor="primary">
                    <Tab label="Currently Reading" onClick={() => setValue(0)} />
                    <Tab label="Finished" onClick={() => setValue(1)} />
                </MUITabs>
                <TabPanel value={value} index={0} >
                    <div id='grid1'>
                        <Grid className="book_grid" container spacing={2} >
                            {Object.keys(data1).map(key =>
                                <Grid item xs={12} sm={4}>

                                    <BookCard key={key} book={data1[key]} eventListener={updateBook} />
                                </Grid>
                            )}
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div id='grid2'>
                        <Grid className="book_grid" container spacing={2} >
                            {Object.keys(data2).map(key =>
                                <Grid item xs={12} sm={4}>
                                    <BookCard key={key} book={data2[key]} eventListener={updateBook} />
                                </Grid>
                            )}
                        </Grid>
                    </div>
                </TabPanel>
            </Container>
        </div>
    )
});

export default Tabs;
