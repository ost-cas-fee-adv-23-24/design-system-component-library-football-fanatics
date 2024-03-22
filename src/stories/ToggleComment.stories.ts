import type { Meta, StoryObj } from '@storybook/react';

import { ToggleComment } from '../components/toggle/ToggleComment';

const meta: Meta<typeof ToggleComment> = {
  title: 'Components/ToggleComment',
  component: ToggleComment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleComment1: Story = {
  args: {
    labelPlural: 'Kommentare',
    labelSingular: 'Komentar',
    amount: 23,
  },
};

export const ToggleComment2: Story = {
  args: {
    labelPlural: 'Comments',
    labelSingular: 'Comment',
    amount: 0,
  },
};

export const ToggleComment3: Story = {
  args: {
    labelPlural: 'Comments',
    labelSingular: 'Comment',
    amount: 1,
  },
};
