/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, Carousel, Select } from "design-system";

import card from "../assets/card.svg";
import cardBlue from "../assets/cardBlue.svg";
import cardPink from "../assets/cardPink.svg";

const StyledDiv1 = styled.div`
  padding: 64px 40px 40px 40px;
  background-color: rgba(254, 237, 233, 1);
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;
const StyledDiv3 = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: start;
  padding: 0 24px;
  align-items: center;
`;

const Styledh2 = styled.h2`
  margin-bottom: 36px;
`;

const StyledDiv4 = styled.div`
  padding: 40px;
`;
const StyledDiv5 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: baseline;
`;

const StyledLink = styled.a`
  color: #f15223;
  font-size: 18px;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  margin-bottom: 32px;
`;

const StyledDiv6 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Checkout = () => {
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <Button isIcon color="#fff">
            <Icon name="arrowBack" />
          </Button>
          <StyledDiv3>
            <h4>Card</h4>
          </StyledDiv3>
          <Button isIcon color="#fff">
            <Icon name="settings" />
          </Button>
        </StyledDiv2>
        <Styledh2>Payment Method</Styledh2>
        <Carousel
          images={[
            { source: card },
            { source: cardBlue },
            { source: cardPink },
          ]}
        />
      </StyledDiv1>
      <StyledDiv4>
        <StyledDiv5>
          <h2>Address</h2>
          <StyledLink>Change</StyledLink>
        </StyledDiv5>
        <p>
          Norra Larsmovägen 70, KUOPIO
          <br />
          70260
          <br />
          Finland
        </p>
        <StyledBorder />
        <StyledDiv5>
          <h2>Delivery</h2>
        </StyledDiv5>
        <p>Tarja A Grönholm</p>
        <StyledDiv6>
          <Select
            options={[
              { title: "DHL Express", value: "dhl" },
              { title: "Fedex", value: "fedex" },
              { title: "Pick up at store", value: "pickup" },
            ]}
          />
          <p>€00.00</p>
        </StyledDiv6>
        <StyledBorder />
        <StyledDiv6>
          <h2>Total</h2>
          <h2>€95.00</h2>
        </StyledDiv6>
        <Button isStretched>Place Order</Button>
      </StyledDiv4>
    </div>
  );
};

export default Checkout;
