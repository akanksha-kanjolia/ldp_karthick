import React from 'react';
import IconButton from './iconbutton';
import SearchIcon from '@material-ui/icons/Search';

export default {
    title: 'Blinkist/Atoms/IconButton',
    component: IconButton,
}

const Template = args => <IconButton {...args} />

export const SearchIconButton = Template.bind({})
SearchIconButton.args = {
    children: <SearchIcon/>,
}