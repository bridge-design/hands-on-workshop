import React from "react";
import styled from "styled-components";
import { Button, Icon } from "design-system";
import itemImg from "../assets/item1.png";

const StyledDiv1 = styled.div`
  padding: 60px 35px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const StyledDiv3 = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDiv5 = styled.div`
  border-radius: 32px;
  margin-bottom: 8px;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 24px;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const StyledP = styled.p`
  margin-bottom: 8px;
  opacity: 0.6;
`;
const Styledh1 = styled.h1`
  margin-bottom: 16px;
`;
const Styledh2 = styled.h2`
  color: #f15223;
  margin-bottom: 40px;
`;
const Details = () => {
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <Button isIcon>
            <Icon name="arrowBack" />
          </Button>
          <StyledDiv3>
            <h4>Nike Air Force 1 '07 LX</h4>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv4>
          <StyledDiv5>
            <StyledButton isIcon>
              <Icon name="heart" />
            </StyledButton>
            <StyledImg src={itemImg} alt="" />
          </StyledDiv5>
          <StyledP> Men's Shoe</StyledP>
          <Styledh1>Nike Air Force 1 '07</Styledh1>
          <Styledh2>€95.00</Styledh2>
          <Button>Add to Cart</Button>
        </StyledDiv4>
      </StyledDiv1>
    </div>
  );
};

export default Details;
