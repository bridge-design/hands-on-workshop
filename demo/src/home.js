/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled, { css } from "styled-components";
console.log("🚀 ~ file: home.js ~ line 7 ~ styled", styled);
// TODO: load components from built library
import * as lib from "lib";
console.log("🚀 ~ file: home.js ~ line 10 ~ lib", lib);
import avatarImg from "../assets/images/avatar.png";

const StyledDiv1 = styled.div`
  padding: 60px 40px;
`;

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
`;

const Styledh2 = styled.h2`
  color: red;
`;
const StyledDiv2 = styled.div`
  display: flex;
  flex-basis: 50%;
`;
const Home = () => {
  return (
    <div>
      <StyledDiv1>
        <div css={{ display: "flex" }}>
          {/* <StyledImage src={avatarImg} />*/}
          <Button isIcon>
            <Icon name="heart" />
          </Button>
        </div>
        {/* <Styledh2>Store</Styledh2> */}
        {/* <p>AllProducts</p> */}
        {/* <icons... */}
        {/* <StyledDiv2></StyledDiv2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. */}
      </StyledDiv1>
    </div>
  );
};

export default Home;
