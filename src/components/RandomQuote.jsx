
import Quote from "./Quote";
import { setRandomQuote } from "../features/StateSlice";
import { useSelector, useDispatch as reduxDispatch } from "react-redux";

const RandomQuote = () => {
  const select = useSelector((state) => state.randomQuote);
  const dispatch = reduxDispatch();
  let quoteTag = "business";
  const changeQuote = async (e) => {
    e.preventDefault();
    console.log(quoteTag);

    try {
      const response = await fetch(`https://api.quotable.io/random?tags=${quoteTag}`);
      if (!response.ok) {
        console.log("Network response was not ok");
      }
      const data = await response.json();
      dispatch(setRandomQuote(data))
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Quote
        content={select.content}
        author={select.author}
        isBookmark={select.isBookmark}
        _id={select._id}
        tags={select.tag}
      />
      <form onSubmit={changeQuote} className="form">
        <select
          name="tags"
          id="tags"
          onChange={(e) => (quoteTag = e.target.value)}
        >
          <option value="business">Business</option>
          <option value="courage">Courage</option>
          <option value="faith">Faith</option>
          <option value="education">Education</option>
          <option value="famous-quotes">FamousQuotes</option>
          <option value="friendship">Friendship</option>
          <option value="happiness">Happiness</option>
          <option value="history">History</option>
          <option value="humor">Humor</option>
          <option value="life">Life</option>
          <option value="love">Love</option>
          <option value="nature">Nature</option>
          <option value="pain">Pain</option>
          <option value="politics">Politics</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RandomQuote;
