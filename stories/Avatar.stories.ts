import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '../components/avatar/Avatar';
import { EAvatarSizes } from '../components/avatar/avata.enum';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
