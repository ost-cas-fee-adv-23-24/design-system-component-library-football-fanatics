import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../components';

const meta: Meta<typeof Label> = {
  title: 'Components/Typography/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['XL', 'L', 'M', 'S'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelExtraLarge: Story = {
  args: {
    size: 'XL',
    text: 'Label Extra Large',
  },
};

export const LabelLarge: Story = {
  args: {
    size: 'L',
    text: 'Label Large',
  },
};
export const LabelMedium: Story = {
  args: {
    size: 'M',
    text: 'Label Medium',
  },
};
export const LabelSmall: Story = {
  args: {
    size: 'S',
    text: 'Label Small',
  },
};
