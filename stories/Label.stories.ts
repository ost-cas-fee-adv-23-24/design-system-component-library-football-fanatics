import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../components/typography/Label';


const meta: Meta<typeof Label> = {
  title: 'Components/Typography/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['XL', 'L', 'M', 'S'],
      control: { type: 'select' }
    },
    children: {
      controls: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelExtraLarge: Story = {
  args: {
    size: 'XL',
    children: 'Label Extra Large',
  },
};

export const LabelLarge: Story = {
  args: {
    size: 'L',
    children: 'Label Large',
  },
};
export const LabelMedium: Story = {
  args: {
    size: 'M',
    children: 'Label Medium',
  },
};
export const LabelSmall: Story = {
  args: {
    size: 'S',
    children: 'Label Small',
  },
};




