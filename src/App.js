import './App.css';
import React from 'react';
import Tabs from './components/atoms/Tabs';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import MainIcon from './components/atoms/icon/mainicon'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//import UploadButton from './components/organisms/dialog/uploadbtn'; 

function App() {
  const [open, setOpen] = React.useState(false);
  const [book, setBook] = React.useState({name:"",author:"",image:""});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(book)
    setOpen(false);
  }; 

  const updateField = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <header className='header'>
        <div className='left'>
          <div className='header_logo'>
            <MainIcon />
          </div>
        </div>
        <div className='center'>
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
          <Button>Explore</Button>
          <Button>My Library</Button>
          <Button>Highlights</Button>
          <Button onClick={handleClickOpen}>Add Book</Button>
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
          <TextField  autoFocus
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
              <Button onClick={handleSubmit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className='right'>
          <Button variant='contained' className='greenbutton'>Upgrade To Premium</Button>
          <Button
            endIcon={<ExpandMoreIcon />}
          >
            Account
          </Button>
        </div>
      </header>

      <div id='midtext'>
        <Typography variant='h4'>My Library</Typography>
      </div>
      <Tabs/>
    </div>
  );
}


export default App;
