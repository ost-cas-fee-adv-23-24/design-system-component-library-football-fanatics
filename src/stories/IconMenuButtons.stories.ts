import type { Meta, StoryObj } from '@storybook/react';

import { ButtonMenu } from '../components/button';
import { EIConTypes } from '../components/icon';

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
  name: 'testing-from-attr',
};

export const IconLinkImage: Story = {
  args: {
    label: 'Link',
    imageSrc:
      'https://i.pinimg.com/originals/52/b3/3b/52b33b1a9834e893a56f743e8e81d5b1.png',
    onCustomClick: () => {},
    name: 'testing-from-attr-1',
  },
};

export const IconButtonUserBlue: Story = {
  args: {
    label: 'User',
    icon: EIConTypes.PROFILE,
    onCustomClick: () => {},
    name: 'testing-from-attr-2',
  },
};

export const IconButtonSettingsBlue: Story = {
  args: {
    label: 'Btn',
    icon: EIConTypes.SETTINGS,
    onCustomClick: () => {},
    name: 'testing-from-attr-3',
  },
};

export const IconButtonLogoutLinkBlue: Story = {
  args: {
    label: 'Link long',
    icon: EIConTypes.LOGOUT,
    href: 'https://www.google.com',
    name: 'testing-from-attr-4',
  },
};
