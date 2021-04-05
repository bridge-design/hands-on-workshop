/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon } from "design-system";

import avatarImg from "../assets/avatar.png";
import item1Img from "../assets/item1.png";

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  display: block;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDiv4 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  margin-left: 16px;
  align-content: flex-start;
`;

const StyledDiv5 = styled.div`
  margin-top: 32px;
  /* padding: 30px 35px 35px 35px; */
`;
const StyledDiv6 = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 16px;
  margin-bottom: 32px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  width: 96px;
  height: 100px;
`;

const Styledh6 = styled.h6`
  max-width: 58%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: auto;
`;

const Styledh62 = styled.h6`
  font-weight: 700;
`;
const StyledP = styled.p`
  opacity: 0.6;
`;

const Styledh2 = styled.h2`
  margin-bottom: 30px;
`;
const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 32px 0;
`;

const BiggerP = styled.p`
  font-size: 18px;
  line-height: 28px;
`;

const Cart = () => {
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <StyledImage src={avatarImg} />
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        </StyledDiv2>
        <Styledh1>Shopping Cart</Styledh1>

        <StyledDiv3>
          <StyledImg src={item1Img} alt="" />
          <StyledDiv4>
            <Styledh6>Nike Air Force 1 '07</Styledh6>
            <Styledh62>€95.00</Styledh62>
            <StyledP>Men's Shoe, Black</StyledP>
          </StyledDiv4>
        </StyledDiv3>
        <StyledBorder />

        <StyledDiv5>
          <Styledh2>Summary</Styledh2>
          <StyledDiv6>
            <p>Subtotal</p>
            <h6>€95.00</h6>
            <p>Estimated Delivery & Handling</p>
            <h6>€0.00</h6>
          </StyledDiv6>
          <StyledBorder />
          <StyledDiv6>
            <BiggerP>Total</BiggerP>
            <h4>€95.00</h4>
          </StyledDiv6>
          <Button isStretched>Checkout</Button>
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

export default Cart;
