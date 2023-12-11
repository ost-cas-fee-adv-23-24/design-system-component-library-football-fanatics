import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button/Button';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonSizes,
  EButtonTypes,
} from '../components/button/button.enum';
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
    kind: {
      options: [EButtonKinds.BUTTON, EButtonKinds.BUTTON_AS_LINK],
    },
    size: {
      options: [EButtonSizes.MEDIUM, EButtonSizes.LARGE],
    },
    icon: {
      options: EIConTypes,
    },
    iconPosition: {
      options: [EButtonIconPosition.RIGHT, EButtonIconPosition.LEFT],
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

export const OnlyIcon: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Btn',
    onlyIcon: true,
    icon: EIConTypes.MUMBLE,
    onClickEvent: () => {},
  },
};

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
    iconPosition: EButtonIconPosition.RIGHT,
    onClickEvent: () => {},
  },
};

export const SecondaryLg: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.SECONDARY,
    label: 'Button secondary lg',
    icon: EIConTypes.LOGOUT,
    iconPosition: EButtonIconPosition.RIGHT,
    onClickEvent: () => {},
  },
};

export const TertiaryMd: Story = {
  args: {
    size: EButtonSizes.MEDIUM,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary md',
    icon: EIConTypes.HEART_BORDERED,
    iconPosition: EButtonIconPosition.LEFT,
    onClickEvent: () => {},
  },
};
export const TertiaryLg: Story = {
  args: {
    size: EButtonSizes.LARGE,
    type: EButtonTypes.TERTIARY,
    label: 'Button tertiary lg',
    icon: EIConTypes.COMMENT_FILLED,
    iconPosition: EButtonIconPosition.LEFT,
    kind: EButtonKinds.BUTTON_AS_LINK,
    href: 'https://www.google.com',
  },
};
