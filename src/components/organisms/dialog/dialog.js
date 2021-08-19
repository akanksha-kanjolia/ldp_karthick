import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const FormDialog = ({eventListener }) => {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({ name: "", author: "", image: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    eventListener(book)
  };

  const updateField = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  };

  useEffect(() => {
    if (open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [open]);

  return (
    <div>
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
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
