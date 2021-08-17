import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UploadButton from './uploadbtn' 


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(title);
    console.log(author);
    console.log(image);
    if(open){
        setOpen(true);
    }else{
        console.log(title);
        console.log(author);
        console.log(image);
        setOpen(false);
    }
  }, [open]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Upload a Book.
          </DialogContentText>
          <input
            autoFocus
            margin="dense"
            id="name"
            label="Book Name"
            fullWidth
            onChange={event => {setTitle(event.target)}}
          />
          <input
           autoFocus
           margin="dense"
           id="author"
           label="Author Name"
           fullWidth 
           onChange={event => {setAuthor(event.target)}}>
          </input>
          <UploadButton id="image" onChange={event => {setImage(event.target)}}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button open={open} onClick={()=> setOpen(false)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
