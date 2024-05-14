import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../components/avatar';
import { EAvatarSizes } from '../components/avatar';
import { EButtonTypes } from '../components/button';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    imgSrc: {
      table: {
        disable: true,
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: EAvatarSizes,
    },
    editable: {
      control: {
        type: 'boolean',
      },
    },
    onSuccess: {
      table: {
        disable: true,
      },
    },
    onError: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarEditable: Story = {
  args: {
    editable: true,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  },
};

export const AvatarSm: Story = {
  args: {
    imgSrc:
      'https://i.pinimg.com/originals/52/b3/3b/52b33b1a9834e893a56f743e8e81d5b1.png',
    name: 'test',
    size: EAvatarSizes.SM,
    editable: false,
  },
};

export const AvatarMD: Story = {
  args: {
    imgSrc:
      'https://i.pinimg.com/originals/52/b3/3b/52b33b1a9834e893a56f743e8e81d5b1.png',
    name: 'test',
    size: EAvatarSizes.MD,
  },
};

export const AvatarLG: Story = {
  args: {
    imgSrc:
      'https://i.pinimg.com/originals/52/b3/3b/52b33b1a9834e893a56f743e8e81d5b1.png',
    name: 'test',
    size: EAvatarSizes.LG,
  },
};
