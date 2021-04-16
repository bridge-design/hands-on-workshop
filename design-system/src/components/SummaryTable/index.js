import React from "react";
import styled from "styled-components";
import { typography as t } from "tokens";

/* SummaryTable
 *
 * SummaryTable displays order details in a table, each row has information on name and price for each item.
 */

const SummaryTable = ({ items, total }) => {
  return (
    items &&
    items.length > 0 && (
      <>
        <StyledHeading>Summary</StyledHeading>
        <StyledGrid>
          {items.map((item) => (
            <React.Fragment key={item.name}>
              <p>{item.name}</p>
              <StyledPrice>{item.price}</StyledPrice>
            </React.Fragment>
          ))}
        </StyledGrid>
        {total && (
          <>
            <StyledBorder />
            <StyledGrid>
              <StyledItemName>Total</StyledItemName>
              <StyledTotal>{total}</StyledTotal>
            </StyledGrid>
          </>
        )}
      </>
    )
  );
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 16px;
  margin-bottom: 32px;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 32px 0;
`;

const StyledItemName = styled.p`
  font-size: 18px;
  line-height: 28px;
`;

const StyledHeading = styled.h2`
  margin-bottom: 30px;
`;

const StyledPrice = styled.div`
  font-family: ${t.headline6FontFamily};
  font-size: ${t.headline6FontSize};
  font-weight: ${t.headline6FontWeight};
  font-style: ${t.headline6FontStyle};
  line-height: ${t.headline6LineHeight};
  letter-spacing: ${t.headline6LetterSpacing};
  text-align: right;
`;

const StyledTotal = styled.div`
  font-family: ${t.headline4FontFamily};
  font-size: ${t.headline4FontSize};
  font-weight: ${t.headline4FontWeight};
  font-style: ${t.headline4FontStyle};
  line-height: ${t.headline4LineHeight};
  letter-spacing: ${t.headline4LetterSpacing};
  text-align: right;
`;

export default SummaryTable;
