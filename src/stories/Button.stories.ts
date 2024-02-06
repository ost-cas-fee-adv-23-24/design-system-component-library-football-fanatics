import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button';
import { EButtonSizes, EButtonTypes } from '../components/button';
import { EIConTypes } from '../components/icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    type: {
      options: [
        EButtonTypes.PRIMARY,
        EButtonTypes.SECONDARY,
        EButtonTypes.TERTIARY,
      ],
    },
    size: {
      options: [EButtonSizes.MEDIUM, EButtonSizes.LARGE],
    },
    icon: {
      options: EIConTypes,
    },

    fitParent: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryMd: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Button Primary md',
    icon: EIConTypes.CHECKMARK,
    onCustomClick: () => {},
  },
};

export const PrimaryLg: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    size: EButtonSizes.LARGE,
    label: 'Button Primary lg',
    icon: EIConTypes.SEND,
    onCustomClick: () => {},
  },
};

export const SecondaryMd: Story = {
  args: {
    size: EButtonSizes.MEDIUM,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary md',
    icon: EIConTypes.TIME,
    onCustomClick: () => {},
  },
};

export const SecondaryLg: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary lg',
    icon: EIConTypes.LOGOUT,
    onCustomClick: () => {},
  },
};

export const TertiaryMd: Story = {
  args: {
    size: EButtonSizes.MEDIUM,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary md',
    icon: EIConTypes.HEART_BORDERED,
    onCustomClick: () => {},
  },
};
export const TertiaryLg: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary lg link',
    icon: EIConTypes.COMMENT_FILLED,
    href: 'https://www.google.com',
  },
};
