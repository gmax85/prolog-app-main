import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Routes } from "@config/routes";
import { SidebarNavigation } from "./SidebarNavigation";

export default {
  title: "UI/SidebarNavigation",
  component: SidebarNavigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SidebarNavigation>;

const Template: ComponentStory<typeof SidebarNavigation> = () => (
  <SidebarNavigation />
);

export const Default = Template.bind({});
Default.parameters = {
  route: Routes.issues,
};
