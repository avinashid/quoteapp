import React, { useState,useEffect } from "react";
import Quote from "./Quote";

const RandomQuote = () => {
  const [rquote,setRquote] = useState("");
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => {
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRquote(data);
        console.log(data)
      })

      .catch(error => {
        console.error(error);
      });   
  }, [])
  
  return (
    <div>
      <Quote
        content={rquote.content}
        author={rquote.author}
        isBookmark={true}
      />

    </div>
  );
};

export default RandomQuote;
