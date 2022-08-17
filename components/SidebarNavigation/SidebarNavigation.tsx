import styled, { css } from "styled-components";

import { Routes } from "@config/routes";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemButton } from "./MenuItemBottom";
import { useRouter } from "next/router";

import { useContext, useState } from "react";
import { NavigationContext } from "@contexts/Navigation";
import { Button } from "@components/Button";
import { breakpoint, color, space, zIndex } from "@styles/theme";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: Routes.projects },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: Routes.issues },
  { text: "Alerts", iconSrc: "/icons/alert.svg", href: Routes.alerts },
  { text: "Users", iconSrc: "/icons/users.svg", href: Routes.users },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: Routes.settings },
];

const Container = styled.div<{ isCollapsed: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoint("desktop")}) {
    width: 17.5rem;
    height: 100vh;
    ${(props) =>
      props.isCollapsed &&
      css`
        width: 5.1875rem;
        ${Logo} {
          width: 1.4375rem;
        }
      `};
  }
`;

const Header = styled.header`
  width: calc(100% - 2 * ${space(4)});
  height: ${({ theme }) => theme.size.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${space(0, 4)};
  background: ${color("gray", 900)};
  position: relative;
  z-index: ${zIndex("header")};

  @media (min-width: ${breakpoint("desktop")}) {
    height: unset;

    padding: ${space(8, 4, 6)};
  }
`;

const Nav = styled.nav<{ isMobileMenuOpen: boolean }>`
  width: 19.5rem;
  position: absolute;
  top: ${({ theme }) => theme.size.headerHeight};
  bottom: 0;

  padding: ${space(0, 2, 8)};
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${color("gray", 900)};
  z-index: ${zIndex("header")};

  transform: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 300ms;

  @media (min-width: ${breakpoint("desktop")}) {
    position: relative;
    top: 0;
    transform: none;
    width: calc(100% - ${space(8)});
    padding: ${space(0, 4, 8)};
  }
`;

const Logo = styled.img`
  width: 7.375rem;
  @media (min-width: ${breakpoint("desktop")}) {
    margin: ${space(0, 3)};
  }
`;

const MenuButton = styled(Button)`
  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
`;

const MenuIcon = styled.img`
  display: block;
  width: ${space(10)};
`;

const MenuOverlay = styled.div<{ isMobileMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${color("gray", 700)};
  z-index: ${(props) => zIndex("header")(props) - 1};
  opacity: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "60%" : "0%")};
  transform: translateX
    (${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0" : "100%")});
  display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "block" : "none")};

  transition: opacity 300ms,
    transform 0s
      ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0s" : "300ms")};

  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkList = styled(List)`
  flex: 1;
`;

const CollapseMenuItem = styled(MenuItemButton)`
  display: none;
  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
  }
`;

export function SidebarNavigation() {
  const router = useRouter();
  // const [isCollapsed, setCollapsed] = useState(false);
  const { isSidebarCollapsed, toggleSidebar } = useContext(NavigationContext);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container isCollapsed={isSidebarCollapsed}>
      <Header>
        <Logo
          src={
            isSidebarCollapsed
              ? "/icons/logo-small.svg"
              : "/icons/logo-large.svg"
          }
          alt="logo"
        />
        <MenuButton onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon
            src={isMobileMenuOpen ? "icons/close.svg" : "icons/menu.svg"}
            alt={isMobileMenuOpen ? "close menu" : "open menu"}
          />
        </MenuButton>
      </Header>
      <MenuOverlay isMobileMenuOpen={isMobileMenuOpen} />
      <Nav isMobileMenuOpen={isMobileMenuOpen}>
        <LinkList>
          {menuItems.map((menuItem, index) => (
            <MenuItemLink
              key={index}
              {...menuItem}
              isCollapsed={isSidebarCollapsed}
              isActive={router.pathname === menuItem.href}
            />
          ))}
        </LinkList>

        <List>
          <MenuItemButton
            text="Support"
            iconSrc="/icons/support.svg"
            isCollapsed={isSidebarCollapsed}
            onClick={() => alert("Support")}
          />
          <CollapseMenuItem
            text="Collapse"
            iconSrc="/icons/arrow-left.svg"
            isCollapsed={isSidebarCollapsed}
            onClick={() => toggleSidebar()}
          />
        </List>
      </Nav>
    </Container>
  );
}
