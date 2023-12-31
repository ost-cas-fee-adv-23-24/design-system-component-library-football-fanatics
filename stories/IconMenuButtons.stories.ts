import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button/Button';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonTypes,
} from '../components/button/button.enum';
import { EIConTypes } from '../components/icon/icon.enum';

const meta: Meta<typeof Button> = {
  title: 'Components/IconMenuButtons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    kind: {
      options: [
        EButtonKinds.BUTTON_ICON_MENU_AS_LINK,
        EButtonKinds.BUTTON_ICON_MENU,
      ],
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
      options: ['', ...Object.values(EIConTypes)],
    },
    iconPosition: {
      table: {
        disable: true,
      },
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonImage: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Link',
    kind: EButtonKinds.BUTTON_ICON_MENU_AS_LINK,
    iconPosition: EButtonIconPosition.TOP,
    href: 'https://www.google.com',
    imageSrc:
      'https://i.pinimg.com/originals/52/b3/3b/52b33b1a9834e893a56f743e8e81d5b1.png',
  },
};

export const IconLinkImage: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Link',
    kind: EButtonKinds.BUTTON_ICON_MENU,
    iconPosition: EButtonIconPosition.TOP,
    imageSrc:
      'https://i.pinimg.com/originals/52/b3/3b/52b33b1a9834e893a56f743e8e81d5b1.png',
    onClickEvent: () => {},
  },
};

export const IconButtonUserBlue: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'User',
    kind: EButtonKinds.BUTTON_ICON_MENU,
    icon: EIConTypes.PROFILE,
    iconPosition: EButtonIconPosition.TOP,
    onClickEvent: () => {},
  },
};

export const IconButtonSettingsBlue: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Btn',
    kind: EButtonKinds.BUTTON_ICON_MENU,
    icon: EIConTypes.SETTINGS,
    iconPosition: EButtonIconPosition.TOP,
    onClickEvent: () => {},
  },
};

export const IconButtonLogoutLinkBlue: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Link',
    kind: EButtonKinds.BUTTON_ICON_MENU_AS_LINK,
    icon: EIConTypes.LOGOUT,
    iconPosition: EButtonIconPosition.TOP,
    href: 'https://www.google.com',
  },
};
