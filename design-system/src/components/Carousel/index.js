import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { colors } from "tokens";

/* Carousel
 *
 * Simple carousel to display payment method options
 */
const Carousel = ({ images, ...props }) => {
  return (
    <StyledCarousel>
      <AwesomeSlider organicArrows={false} {...props}>
        {images &&
          images.map((image) => (
            <div key={image.source} style={{ display: "flex" }}>
              <img src={image.source} />
            </div>
          ))}
      </AwesomeSlider>
    </StyledCarousel>
  );
};

export const StyledCarousel = styled.div`
  > .awssld {
    --control-bullet-color: ${colors.secondaryBlack20};
    --control-bullet-active-color: ${colors.secondaryBlack100};
    --content-background-color: transparent;
    --loader-bar-color: #ffffff;
    --loader-bar-height: 1px;
  }
  .awssld__content > img,
  .awssld__content > video {
    object-fit: contain;
  }
  .awssld__bullets {
    position: relative;
    bottom: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    height: 36px;
    align-items: flex-end;
    button {
      width: 8px;
      height: 8px;
      margin: 0 4px;
      opacity: 0.6;
      border-radius: 50%;
    }
    & > .awssld__bullets--active {
      transform: none;
    }
  }
`;

export default Carousel;
