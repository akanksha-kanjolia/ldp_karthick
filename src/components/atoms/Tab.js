import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <Tabs value={value} onChange={handleChange} aria-label="ant example">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
        {
          value === 0 &&
          // When the user clicks on Test One or Test Two, update the state
          // to display Tab 2
          <div onClick={() => this.setState({ value: 1 })}>
            <TabContainer >
              Test One
            </TabContainer>
            <TabContainer>
              Test Two
            </TabContainer>
          </div>
        }
        {
          value === 1 &&
          <div>
            <TabContainer>
              Test Three
            </TabContainer>
            <TabContainer>
              Test Four
            </TabContainer>
          </div>
        }
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
