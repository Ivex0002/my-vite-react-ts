import { css } from "@emotion/react";

/* row or column */
type FlexDirection = "row" | "column";

export const flexCenter = (direction: FlexDirection = "row") => css`
  display: flex;
  flex-direction: ${direction};
  align-items: center;
  justify-content: center;
`;

// const Card = styled.div`
//   ${flexCenter};
//   background: #f5f5f5;
// `;
// or
// <div css={[flexCenter('column'), myStyle]}>
