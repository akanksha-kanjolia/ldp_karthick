import React from 'react';
import Button from '../../atoms/button/button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import MainIcon from '../../atoms/icon/mainicon';
import { makeStyles } from '@material-ui/core/styles';
import FormDialog from '../../organisms/dialog/dialog';

const useStyles = makeStyles({
  header: {
    display: "flex",
  }
});

const Header = ({ props, eventListener }) => {
  const classes = useStyles();
  return (
    <div className={`header ${classes.header}`}>
      <table>
        <tbody>
          <tr>
          <td>
            <div className='header_logo'>
              <MainIcon />
            </div>
          </td>
          <td>
            <IconButton className='header_middle' aria-label="search">
              <SearchIcon />
            </IconButton>
          </td>
          <td>
            <Button className='header_middle'  endIcon={<ExpandMoreIcon />}>Explore</Button>
          </td>
          <td>
            <Button className='header_middle'>My Library</Button>
          </td>
          <td>
            <Button className='header_middle'>Highlights</Button>
          </td>
          <td>
            <FormDialog className='header_middle' eventListener={eventListener} />
          </td>
          <td>
            <Button className="header_content" variant='contained' color="primary">Upgrade To Premium</Button>
          </td>
          <td>
            <Button className="header"
              endIcon={<ExpandMoreIcon />}
            >
              Account
            </Button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  )
}

export default Header;