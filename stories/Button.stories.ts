import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button/Button';
import {
  EButtonIconPosition,
  EButtonSizes,
  EButtonTypes,
} from '../components/button/button.enum';
import { EIConTypes } from '../components/icon/icon.enum';
import { IconOptions } from './Icon.stories';

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
      options: IconOptions,
    },
    iconPosition: {
      options: [EButtonIconPosition.RIGHT, EButtonIconPosition.LEFT],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const OnlyIcon: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Button Primary',
    onlyIcon: true,
    icon: EIConTypes.MUMBLE,
  },
};

export const PrimarySm: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    size: EButtonSizes.SMALL,
    label: 'Button Primary',
    onlyIcon: false,
    icon: EIConTypes.ARROW_UP,
  },
};

export const PrimaryMd: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Button Primary',
    onlyIcon: false,
    icon: EIConTypes.CHECKMARK,
  },
};

export const PrimaryLg: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    size: EButtonSizes.LARGE,
    label: 'Button Primary',
    onlyIcon: false,
    icon: EIConTypes.SEND,
  },
};

export const SecondarySm: Story = {
  args: {
    size: EButtonSizes.MEDIUM,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary',
    icon: EIConTypes.SETTINGS,
    iconPosition: EButtonIconPosition.RIGHT,
  },
};

export const SecondaryMd: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary',
    icon: EIConTypes.TIME,
    iconPosition: EButtonIconPosition.RIGHT,
  },
};

export const SecondaryLg: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary',
    icon: EIConTypes.LOGOUT,
    iconPosition: EButtonIconPosition.RIGHT,
  },
};

export const TertiarySm: Story = {
  args: {
    size: EButtonSizes.SMALL,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary',
    icon: EIConTypes.LOCATION,
    iconPosition: EButtonIconPosition.LEFT,
  },
};
export const TertiaryMd: Story = {
  args: {
    size: EButtonSizes.MEDIUM,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary',
    icon: EIConTypes.HEART_BORDERED,
    iconPosition: EButtonIconPosition.LEFT,
  },
};
export const TertiaryLg: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary',
    icon: EIConTypes.COMMENT_FILLED,
    iconPosition: EButtonIconPosition.LEFT,
  },
};
