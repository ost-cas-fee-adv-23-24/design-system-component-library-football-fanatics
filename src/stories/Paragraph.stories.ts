import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from '../components/typography/Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['L', 'M'],
      control: { type: 'select' },
    },
    text: {
      controls: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParagraphLarge: Story = {
  args: {
    size: 'L',
    text: 'Paragraph Large',
  },
};
export const ParagraphMedium: Story = {
  args: {
    size: 'M',
    text: 'Paragraph Medium',
  },
};
