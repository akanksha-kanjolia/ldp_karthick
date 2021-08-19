import React from 'react';
import Header from './header';

export default {
  title: 'Blinkist/Molecules/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {
  className : {
    height: 100,
    flexGrow: 1,
    maxWidth: 400,
    marginLeft: '12em'
  },
  src: '../../../assets/logo1.jpg',
  style: {
    width: '50%'
  }
};