import BookCard from "./book_card";
import {BookTitle,Author} from "../../atoms/text/text.stories";
import ReadTimeDiv from "../../molecules/book_description/read_time.stories";
import OutlinedButton from "../../atoms/button/button.stories";

export default{
    title:"Blinkist/Organisms/bookcard",
    component: BookCard,
}

const Template = args => <BookCard {...args} />

export const BookCardDiv = Template.bind({});

BookCardDiv.args = {
    name:"Book",
    author:"Author",
    image:"https://images.blinkist.io/images/books/5f5fcf476cee070006c639d9/1_1/470.jpg",
    nametext:BookTitle.args,
    authortext:Author.args,
    timetext:ReadTimeDiv.args,
    buttonlabel:"Finish",
    button:OutlinedButton.args,
}