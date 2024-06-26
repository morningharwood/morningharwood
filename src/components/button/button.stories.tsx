import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Button, type ButtonProps } from "./button";

const meta: Meta<ButtonProps> = {
  component: Button,
};

type Story = StoryObj<ButtonProps>;

export default meta;

export const Primary: Story = {
  args: {
    size: "xxl",
    kind: "primary",
    shape: "pill"
  },
  render: (props) => <Button {...props}>Some button</Button>,
};
export const Secondary: Story = {
  args: {
    size: "xxl",
    kind: "secondary",
    shape: "pill"
  },
  render: (props) => <Button {...props}>Some button</Button>,
};
