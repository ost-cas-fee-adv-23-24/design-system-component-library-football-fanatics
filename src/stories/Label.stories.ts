import type { Meta, StoryObj } from '@storybook/react';

import { ELabelSize, Label } from '../components/label';

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
    size: ELabelSize.XL,
    text: 'Label Extra Large',
    htmlFor: '1',
  },
};

export const LabelLarge: Story = {
  args: {
    size: ELabelSize.L,
    text: 'Label Large',
    htmlFor: '2',
  },
};
export const LabelMedium: Story = {
  args: {
    size: ELabelSize.M,
    text: 'Label Medium',
    htmlFor: '3',
  },
};
export const LabelSmall: Story = {
  args: {
    size: ELabelSize.S,
    text: 'Label Small',
    htmlFor: '4',
  },
};
