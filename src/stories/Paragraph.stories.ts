import type { Meta, StoryObj } from '@storybook/react';

import { EParagraphSizes, Paragraph } from '../components/typography';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: EParagraphSizes,
      control: { type: 'select' },
    },
    text: {
      controls: { type: 'text' },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParagraphLarge: Story = {
  args: {
    size: EParagraphSizes.LARGE,
    text: 'Paragraph Large',
  },
};
export const ParagraphMedium: Story = {
  args: {
    size: EParagraphSizes.MEDIUM,
    text: 'Paragraph Medium',
  },
};
