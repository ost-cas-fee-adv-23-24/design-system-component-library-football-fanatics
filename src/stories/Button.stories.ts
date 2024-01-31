import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button/Button';
import {
  EButtonSizes,
  EButtonTypes,
} from '../components/button/utils/button.enum';
import { EIConTypes } from '../components/icon/icon.enum';

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
    clipboardData: {
      table: {
        disable: true,
      },
    },
    clipboardHighlightDelay: {
      table: {
        disable: true,
      },
    },
    clipboardCopySuccessLabel: {
      table: {
        disable: true,
      },
    },
    clipboardCopyErrorLabel: {
      table: {
        disable: true,
      },
    },
    fitParent: {
      table: {
        disable: true,
      },
    },
    imageSrc: {
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
    onlyIcon: false,
    icon: EIConTypes.CHECKMARK,
    onClickEvent: () => {},
  },
};

export const PrimaryLg: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    size: EButtonSizes.LARGE,
    label: 'Button Primary lg',
    onlyIcon: false,
    icon: EIConTypes.SEND,
    onClickEvent: () => {},
  },
};

export const SecondaryMd: Story = {
  args: {
    size: EButtonSizes.MEDIUM,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary md',
    icon: EIConTypes.TIME,
    onClickEvent: () => {},
  },
};

export const SecondaryLg: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary lg',
    icon: EIConTypes.LOGOUT,
    onClickEvent: () => {},
  },
};

export const TertiaryMd: Story = {
  args: {
    size: EButtonSizes.MEDIUM,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary md',
    icon: EIConTypes.HEART_BORDERED,
    onClickEvent: () => {},
  },
};
export const TertiaryLg: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary lg',
    icon: EIConTypes.COMMENT_FILLED,
    href: 'https://www.google.com',
  },
};
