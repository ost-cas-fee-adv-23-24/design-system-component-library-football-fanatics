import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button/button';
import {
  EButtonIconPosition,
  EButtonSizes,
  EButtonTypes,
} from '../components/button/button.enum';
import { EIConTypes } from '../components/icon/icon.enum';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: [
        EButtonTypes.PRIMARY,
        EButtonTypes.SECONDARY,
        EButtonTypes.TERTIARY,
      ],
    },
    size: {
      options: [EButtonSizes.SMALL, EButtonSizes.MEDIUM, EButtonSizes.LARGE],
    },
    icon: {
      options: [
        EIConTypes.ARROW_DOWN,
        EIConTypes.ARROW_LEFT,
        EIConTypes.ARROW_RIGHT,
        EIConTypes.ARROW_UP,
      ],
    },
    iconPosition: {
      options: [EButtonIconPosition.RIGHT, EButtonIconPosition.LEFT],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary',
  },
};

export const Tertiary: Story = {
  args: {
    size: EButtonSizes.MEDIUM,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary',
  },
};
