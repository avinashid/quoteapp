import React,{useEffect} from "react";
import Header from "./components/Header";
import Bookmark from "./components/Bookmark";
import RandomQuote from "./components/RandomQuote"
import { useSelector, useDispatch as reduxDispatch } from 'react-redux'
import { setRandomQuote } from "./features/StateSlice";

const App = () => {
  const dispatch = reduxDispatch();
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        console.log('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const data = await fetchQuote();
      dispatch(setRandomQuote(data));
    };
    getData();
  }, [dispatch]);

  const homeToggle = useSelector((state) => state.homeToggle)
  const isHome = homeToggle?<RandomQuote/>:<Bookmark/>
  return (
    <div>
      <Header />
      {isHome}
    </div>
  );
};

export default App;
