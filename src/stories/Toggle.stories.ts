import type { Meta, StoryObj } from '@storybook/react';

import { ToggleLikeWrapper } from '../components/toggle/ToggleLikeWrapper';

const meta: Meta<typeof ToggleLikeWrapper> = {
  title: 'Components/ToggleLike',
  component: ToggleLikeWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleLike: Story = {
  args: {
    labelPlural: 'Likes',
    labelSingular: 'Like',
    labelLiked: 'Liked!!',
    amount: 23,
  },
};

export const ToggleLikeZero: Story = {
  args: {
    labelPlural: 'Me gusta',
    labelSingular: 'Me gusta',
    labelLiked: 'Gustado',
    amount: 0,
  },
};
