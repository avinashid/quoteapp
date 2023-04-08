import React from "react";
import {
  useSelector as reduxSelector,
  useDispatch as reduxDispatch,
} from "react-redux";
import { toggleHome } from "../features/StateSlice";

const header = () => {
  const dispatch = reduxDispatch();
  const fontWeight = reduxSelector((state) => state.homeToggle);
  return (
    <div className="header">
      <div
        className="pointer"
        style={{ "fontWeight": fontWeight ? "700" : "100" }}
        onClick={() => dispatch(toggleHome(true))}
      >
        Home
      </div>
      <div
        className="pointer"
        style={{ "font-weight": fontWeight ? "100" : "700" }}
        onClick={() => dispatch(toggleHome(false))}
      >
        Bookmark
      </div>
    </div>
  );
};

export default header;
