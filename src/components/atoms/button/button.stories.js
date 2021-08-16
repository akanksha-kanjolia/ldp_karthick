import React from 'react';
import Button from './button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
    title: 'Blinkist/Atoms/Button',
    component: Button,
}

const Template = args => <Button {...args} />

export const EndIconButton = Template.bind({})
EndIconButton.args = {
    variant: 'text',
    endIcon: <ExpandMoreIcon/>,
} 

export const ContainedButton = Template.bind({})
ContainedButton.args = {
    variant : 'contained',
}        

export const TextButton = Template.bind({})
TextButton.args = {
    variant: 'text',
} 

export const OutlinedButton = Template.bind({})
OutlinedButton.args = {
    variant: 'outlined',
    fullWidth:'true',
    align:'center',
} 
