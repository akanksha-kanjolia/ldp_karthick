import Text from "./text";
import React from 'react';


export default {
    title: 'Blinkist/Atoms/Text',
    component: Text
}

const Template = args => <Text {...args} />

export const CurrentTab = Template.bind({})
CurrentTab.args = {
        variant: 'h1',
}

export const BookTitle = Template.bind({})
BookTitle.args = {
        variant: 'h6',
        align:'center'
}

export const Author = Template.bind({})
Author.args = {
        variant: 'subtitle1',
        align:'center'
}

export const ReadTime = Template.bind({})
ReadTime.args = {
        variant: 'body1',
        align:'center'
}