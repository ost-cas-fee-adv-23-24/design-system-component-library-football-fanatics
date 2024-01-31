import type { Meta, StoryObj } from '@storybook/react';

import { ButtonMenu } from '../components/button/ButtonMenu';
import { EIConTypes } from '../components/icon/utils/icon.enum';

const meta: Meta<typeof ButtonMenu> = {
  title: 'Components/IconMenuButtons',
  component: ButtonMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    icon: {
      options: ['', ...Object.values(EIConTypes)],
    },
    openInNewTab: {
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
    label: 'Link',
    href: 'https://www.google.com',
    imageSrc:
      'https://i.pinimg.com/originals/52/b3/3b/52b33b1a9834e893a56f743e8e81d5b1.png',
  },
};

export const IconLinkImage: Story = {
  args: {
    label: 'Link',
    imageSrc:
      'https://i.pinimg.com/originals/52/b3/3b/52b33b1a9834e893a56f743e8e81d5b1.png',
    onCustomClick: () => {},
  },
};

export const IconButtonUserBlue: Story = {
  args: {
    label: 'User',
    icon: EIConTypes.PROFILE,
    onCustomClick: () => {},
  },
};

export const IconButtonSettingsBlue: Story = {
  args: {
    label: 'Btn',
    icon: EIConTypes.SETTINGS,
    onCustomClick: () => {},
  },
};

export const IconButtonLogoutLinkBlue: Story = {
  args: {
    label: 'Link',
    icon: EIConTypes.LOGOUT,
    href: 'https://www.google.com',
  },
};
