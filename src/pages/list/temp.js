import './temp.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import MainIcon from '../../components/atoms/icon/mainicon'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { React, useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';
import Grid from '../../components/organisms/grid1';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Temp() {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({ name: "", author: "", image: "" });

  const [value, setValue] = useState(0);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);


  const addData = () => {
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
      name: book.name,
      author: book.author,
      time: 13,
      image: "https://images.blinkist.io/images/books/602698356cee070007691895/1_1/470.jpg"
    }])
  }     
  setOpen(false);
  }

  useEffect(()=>{
    ReactDOM.render(<Grid>{data1}</Grid>, document.getElementById('grid1'));
  },[data1])

  useEffect(()=>{
    ReactDOM.render(<Grid>{data2}</Grid>, document.getElementById('grid2'));
  },[data2])

useEffect(() => {
  var url;
  if (value === 0) {
    url = 'https://run.mocky.io/v3/520015d9-dacf-4cf1-a892-3e097c9f20d6';
  } else if (value === 1) {
    url = 'https://run.mocky.io/v3/8e326477-dd39-4c96-81cb-ef3fb95c6c52';
  }
  axios.get(url).then(res => {
    const books = res.data.book;
    if (value === 0) {
      setData1([...books])
    } else {
      setData2([...books])
    }
  });
}, [value]);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const updateField = e => {
  setBook({
    ...book,
    [e.target.name]: e.target.value
  })
  console.log(book)
};



return (
  <div className="Temp">
    <header className='header'>
      <table>
        <tr>
          <td>
            <div className='header_logo'>
              <MainIcon />
            </div>
          </td>
          <td>
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </td>
          <td>
            <Button>Explore</Button>
          </td>
          <td>
            <Button>My Library</Button>
          </td>
          <td>
            <Button>Highlights</Button>
          </td>
          <td>
            <Button onClick={handleClickOpen}>Add Book</Button>
          </td>
          <td>
            <Button variant='contained' className='greenbutton'>Upgrade To Premium</Button>
          </td>
          <td>
            <Button
              endIcon={<ExpandMoreIcon />}
            >
              Account
            </Button>
          </td>
        </tr>
      </table>



      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Upload a Book</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Book Name"
            fullWidth
            name="name"
            onChange={updateField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="author"
            label="Author Name"
            fullWidth
            name="author"
            onChange={updateField}>
          </TextField>
          <TextField autoFocus
            margin="dense"
            id="image"
            label="image "
            fullWidth
            type="file" name="image" onChange={updateField}></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addData} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </header>

    <div id='midtext'>
      <Typography variant='h4'>My Library</Typography>
    </div>
    <div >
      <Tabs value={value}
        centered>
        <Tab label="Currently Reading" onClick={() => setValue(0)}>
        </Tab>
        <Tab label="Finished" onClick={() => setValue(1)}>
        </Tab>
      </Tabs>
      <TabPanel value={value} index={0} id='grid1'>
        <Grid>{data1}</Grid>
      </TabPanel>
      <TabPanel value={value} index={1} id='grid2'>
        <Grid >{data2}</Grid>
      </TabPanel>
    </div>
  </div>
);
}


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
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default Temp;
