import React from "react";
import Quote from "./Quote";
import { useSelector as reduxSelector } from "react-redux";


const bookmark = () => {
  const select = reduxSelector((state) => state.bookmark);
  console.log(select)
  
  const bookmark = select.map(select=>
    <Quote
        content={select.content}
        author={select.author}
        isBookmark={select.isBookmark}
        _id={select._id}
      />
  )
  return <div className="bookmark">{bookmark}</div>;
};

export default bookmark;
