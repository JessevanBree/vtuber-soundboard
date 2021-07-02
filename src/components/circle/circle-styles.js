import styled from "styled-components";

export const CircleContainer = styled.div`
  @media (min-width:961px)  { 
    position: absolute;
    z-index: -1;
    ${ ({ width, height, bgColor, top, left, bottom, right, radius, rotation }) => `
      bottom: ${bottom || "inherit"};
      top: ${top || "inherit"};
      left: ${left || "inherit"};
      right: ${right || "inherit"};
      width: ${width || "0"}px;
      height: ${height || "0"}px;
      background-color: ${bgColor || "inherit"};
      border-radius: ${radius || "50%"};
      transform: rotate(${rotation || "0deg"});
    `}
  }
`