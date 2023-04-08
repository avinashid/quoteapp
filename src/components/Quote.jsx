import React from "react";
import { FaBookmark,FaRegBookmark } from "react-icons/fa";

const quote = ({ content, author, isBookmark }) => {
  const bookmark = isBookmark ? <FaBookmark/>:<FaRegBookmark/>;
  return (
    <div className="quote">
      <div className="quoteText">
        {content}
      </div>
      <div className="quoteBottom">
        <div className="quoteAuthor">--{author}</div>
        <div className="bookmark">{bookmark}</div>
      </div>
    </div>
  );
};

export default quote;
