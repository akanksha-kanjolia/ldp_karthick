import Clock from "./clock"

export default {
    title: 'Blinkist/Atoms/Clock',
    component: Clock,
}

const Template = args => <Clock {...args} />

export const ReadClock = Template.bind({})
ReadClock.args = {
   src:"https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg",
}