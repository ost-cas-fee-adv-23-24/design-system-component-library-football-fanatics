import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button/Button';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonTypes,
} from '../components/button/button.enum';
import { EIConTypes } from '../components/icon/icon.enum';

const meta: Meta<typeof Button> = {
  title: 'Components/IconButtons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: [EButtonTypes.PRIMARY, EButtonTypes.SECONDARY],
    },
    kind: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    icon: {
      options: EIConTypes,
    },
    iconPosition: {
      options: [EButtonIconPosition.RIGHT, EButtonIconPosition.LEFT],
    },
    onlyIcon: {
      table: {
        disable: true,
      },
    },
    openInNewTab: {
      table: {
        disable: true,
      },
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

export const IconButtonUserBlue: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Username',
    kind: EButtonKinds.BUTTON_ICON,
    icon: EIConTypes.PROFILE,
    href: 'https://www.google.com',
    onClickEvent: () => {},
  },
};

export const IconButtonTimestampGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Timestamp',
    kind: EButtonKinds.BUTTON_ICON,
    icon: EIConTypes.TIME,
    onClickEvent: () => {},
  },
};

export const IconButtonLocationGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Location',
    kind: EButtonKinds.BUTTON_ICON,
    icon: EIConTypes.LOCATION,
    onClickEvent: () => {},
  },
};

export const IconButtonJoinedGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Joined',
    kind: EButtonKinds.BUTTON_ICON,
    icon: EIConTypes.CALENDAR,
    onClickEvent: () => {},
  },
};
