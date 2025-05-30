/*
// 믹스업
@mixin flex(
  $direction: row,
  $justify: start,
  $align: stretch,
  $gap: 0,
  $wrap: nowrap
) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
  flex-wrap: $wrap;
}

@mixin font($size, $weight: 400) {
  font-size: $size;
  font-weight: $weight;
}

// 변수
$tag-color: #d7fa00;
$gray: rgb(160, 160, 160);
*/

import { css } from "styled-components";

export const flexMixin = ({
  direction = "row",
  justify = "start",
  align = "stretch",
  gap = 0,
  wrap = "nowrap",
}) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};

export const fontMixin = ({ size, weight = 400 }) => css`
  font-size: ${size};
  font-weight: ${weight};
`;

export const tagColor = "#d7fa00";

export const gray = "rgb(160, 160, 160)";
