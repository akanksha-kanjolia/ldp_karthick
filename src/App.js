import './App.css';
import React from 'react';
import Tabs from './components/atoms/Tabs';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import MainIcon from './components/atoms/icon/mainicon'
import Typography from '@material-ui/core/Typography';
import MenuListComposition from './components/molecules/extbbuttons/ext_button';

function App() {
  return (
    <div className="App">
      
        <header className='header'>
          <div className='left'>
            <div className='header_logo'>
              <MainIcon/>
            </div>
          </div>
          <div className='center'>
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <Button>Explore</Button>
            <Button>My Library</Button>
            <Button>Highlights</Button>
          </div>
          <div className='right'>
            <Button variant='contained' className='greenbutton'>Upgrade To Premium</Button>
            <MenuListComposition
              endIcon={<ExpandMoreIcon />}
            >
              Account
            </MenuListComposition>
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
