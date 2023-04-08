import React from "react";
import {
  useDispatch as reduxDispatch,
} from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import {
  addBookmark,
  deleteBookmark,
  toggleBookmark,
} from "../features/StateSlice";

const Quote = ({ content, author, isBookmark, _id, tags }) => {
  const bookmark = isBookmark ? <FaBookmark /> : <FaRegBookmark />;
  const dispatch = reduxDispatch();

  const handleBookmarkToggle = () => {
    if (!isBookmark) {
      dispatch(addBookmark({ content, author, isBookmark, _id, tags }));
    } else {
      dispatch(deleteBookmark(_id));
    }
    dispatch(toggleBookmark(_id));
  };

  return (
    <div className="quote">
      <div className="quoteText">{content}</div>
      <div className="quoteBottom">
        <div className="quoteAuthor">--{author}</div>
        <div className="pointer" onClick={handleBookmarkToggle}>
          {bookmark}
        </div>
      </div>
    </div>
  );
};

export default Quote;
