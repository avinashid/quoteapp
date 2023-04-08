import React from "react";

const quote = ({ content, author, isBookmark }) => {
  return (
    <div className="quote">
      <div className="quoteText">
        The human spirit must prevail over technology
      </div>
      <div className="quoteBottom">
        <div className="quoteAuthor">--Albert Einstein</div>
        <div className="bookmark"></div>
      </div>
    </div>
  );
};

export default quote;
