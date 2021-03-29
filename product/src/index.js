import React from "react";
import ReactDOM from "react-dom";
// We will use HashRouter instead of BrowserRouter fto simplify the deploy to Github Pages
import { HashRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
/*
 * Each page has its own file in the "product" folder. By default, it is the Home
 * page. The code for it is in the home.js file.
 */
import Home from "./pages/home";
import Details from "./pages/details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import { GlobalStyle } from "design-system";

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
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/details" component={Details} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/cart" component={Cart} />
    </StyledContainer>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
