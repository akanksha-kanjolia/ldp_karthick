import './list.css';
import Tabs from '../../components/organisms/tab/tabs';
import Header from '../../components/molecules/header/header';
import React from 'react';

const { useRef } = React;

function List() {
  
  const childRef = useRef();

  const eventListener = (book) =>{
    console.log(book)
    childRef.current.addBook(book);
  }
  return (
    <div className="List">
      <Header eventListener={eventListener}/>
      <Tabs ref={childRef} />
    </div>
  );
}

export default List;
