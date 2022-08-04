import React from "react";
import Link from "next/link";
import styled from "styled-components";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
};

const ListItem = styled.li<{ isActive: boolean }>`
  height: 51px;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[1]};
  padding: 0 ${({ theme }) => theme.space[3]};
  background: ${({ theme, isActive }) =>
    isActive ? theme.color.gray[700] : "transparent"};
  border-radius: 6px;

  &:first-child {
    margin-top: 0;
  }
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray[100]};
  text-decoration: none;
`;

const Icon = styled.img`
  margin-right: ${({ theme }) => theme.space[3]};
`;

export function MenuItemLink({
  text,
  href,
  iconSrc,
  isActive,
  isCollapsed,
}: MenuItemProps) {
  return (
    <ListItem isActive={isActive}>
      <Link href={href} passHref>
        <Anchor>
          <Icon src={iconSrc} alt={`${text} icon`} />
          {!isCollapsed && text}
        </Anchor>
      </Link>
    </ListItem>
  );
}
