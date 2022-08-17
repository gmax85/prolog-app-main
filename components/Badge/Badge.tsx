import React from "react";
import styled, { css } from "styled-components";
import { space, font, color } from "@styles/theme";

export enum BadgeSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum BadgeColor {
  primary = "primary",
  gray = "gray",
  error = "error",
  warning = "warning",
  success = "success",
}

type BadgeProps = {
  children: React.ReactNode;
  size?: BadgeSize;
  color?: BadgeColor;
};

const Container = styled.div<{ size: BadgeSize; color: BadgeColor }>`
  width: fit-cotent;
  display: flex;
  align-items: center;
  background: #f9f5ff;
  border-radius: ${space(4)};

  ${font("sm", "md")};

  ${(props) => {
    switch (props.size) {
      case BadgeSize.sm:
        return css`
          padding: ${space(0, 2)};
          height: 1.375rem;
          ${font("xs", "md")};
        `;
      case BadgeSize.md:
        return css`
          padding: 0 0.625rem};
          height: 1.5rem;
          ${font("sm", "md")};
        `;
      case BadgeSize.lg:
        return css`
          padding: 0 ${space(0, 3)};
          height: 1.75rem;
          ${font("sm", "md")};
        `;
    }
  }}
  ${(props) => {
    switch (props.color) {
      case BadgeColor.gray:
        return css`
          background: ${color("gray", 100)};
          color: ${color("gray", 700)};
        `;
      default:
        return css`
          background: ${color(props.color, 50)};
          color: ${color(props.color, 700)};
        `;
    }
  }}
`;

export function Badge({
  children,
  size = BadgeSize.md,
  color = BadgeColor.primary,
}: BadgeProps) {
  return (
    <Container size={size} color={color}>
      {children}
    </Container>
  );
}
