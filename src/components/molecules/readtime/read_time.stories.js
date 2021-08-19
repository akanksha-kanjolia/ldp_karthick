import ReadTime from "./read_time";
import { ReadClock } from "../../atoms/icon/clock.stories";
//import textStories from "../../atoms/Text/text.stories";

export default{
    title : "Blinkist/Molecules/ReadTime"
}


const Template = args => <ReadTime {...args} />

export const ReadTimeDiv = Template.bind({});

ReadTimeDiv.args = {
    time:15,
    label:"-minute read",
    clock: ReadClock.args,
}