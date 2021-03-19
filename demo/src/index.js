/*
 * When running `npm run demo`, you will see the pages rendered by this file.
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
console.log("🚀 ~ file: index.js ~ line 8 ~ Router", Router);
import styled from "styled-components";
/*
 * Each page has its own file in the "demo" folder. By default, it is the Home
 * page. The code for it is in the home.js file.
 */
import Home from "./home";
import Details from "./details";

const StyledContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  background: #fff;
  min-height: 800px;
`;
/*
 * The router says which path correspond to which page.
 */
const App = () => (
  <Router>
    <StyledContainer>
      <Route exact path="/" component={Home} />
      {/* <Route path="/details" component={Details} /> */}
    </StyledContainer>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("react-root"));
