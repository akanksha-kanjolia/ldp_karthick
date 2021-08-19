import React from 'react';
import Button from '../../atoms/button/button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import MainIcon from '../../atoms/icon/mainicon';
import { makeStyles } from '@material-ui/core/styles';
import FormDialog from '../../organisms/dialog/dialog';

const useStyles = makeStyles({
  root: {
      fontWeight: 'bold',
      float: 'left',
      marginLeft: '12.8em',
      fontSize: '2rem',
      fontFamily: 'system-ui',
      color: '#03314B',
  }
});

const Header = ({ props, eventListener }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <table style={{float:'left'}}>
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
              <FormDialog eventListener={eventListener} />
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
    </div>

  )
}

export default Header