import { React, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';
import Grid from './Grid';
import PropTypes from 'prop-types';

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


export default function CustomizedTabs() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    var url;
    if(value === 0){
      url = 'https://run.mocky.io/v3/520015d9-dacf-4cf1-a892-3e097c9f20d6';
    }else if(value === 1){
      url = 'https://run.mocky.io/v3/8e326477-dd39-4c96-81cb-ef3fb95c6c52';
    }
    axios.get(url).then(res => {
      const books = res.data.book;
      if(value === 0){
        ReactDOM.render(<Grid>{books}</Grid>, document.getElementById('grid1'));
      }else{
        ReactDOM.render(<Grid>{books}</Grid>, document.getElementById('grid2'));
      }
    });
  }, [value]);

  return (
    <div >
      <div >
        <Tabs value={value}
          aria-label="ant example"
          centered>
          <Tab label="Currently Reading" onClick={() => setValue(0)}>
          </Tab>
          <Tab label="Finished" onClick={() => setValue(1)}>
          </Tab>
        </Tabs>
        <TabPanel value={value} index={0} id='grid1'>
          <Grid />
        </TabPanel>
        <TabPanel value={value} index={1} id='grid2'>
          <Grid />
        </TabPanel>
      </div>
    </div>
  );
}

