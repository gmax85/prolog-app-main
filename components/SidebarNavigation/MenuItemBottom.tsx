import React from "react";
import styled from "styled-components";

import { Button as UnstyledButton } from "@components/Button";

type MenuItemProps = {
  className?: string;

  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
};

const ListItem = styled.li`
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
`;


const Button = styled(UnstyledButton)`

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray[100]};
  text-decoration: none;
  cursor: pointer;


`;

const Icon = styled.img`
  margin-right: ${({ theme }) => theme.space[3]};
`;

export function MenuItemButton({

  className,

  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  return (

    <ListItem className={className}>

      <Button onClick={onClick}>
        <Icon src={iconSrc} alt={`${text} icon`} />
        {!isCollapsed && text}
      </Button>
    </ListItem>
  );
}
