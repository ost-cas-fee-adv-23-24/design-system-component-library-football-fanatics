import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../components/typography';
import { ETypographyLevels } from '../components/typography/utils/typography.enum';

const meta: Meta<typeof Heading> = {
  title: 'Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      options: ETypographyLevels,
      control: { type: 'select' },
    },
    text: {
      controls: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    level: ETypographyLevels.ONE,
    text: 'Überschrift 1',
  },
};
export const Heading2: Story = {
  args: {
    level: ETypographyLevels.TWO,
    text: 'Überschrift 2',
  },
};
export const Heading3: Story = {
  args: {
    level: ETypographyLevels.THREE,
    text: 'Überschrift 3',
  },
};
export const Heading4: Story = {
  args: {
    level: ETypographyLevels.FOUR,
    text: 'Überschrift 4',
  },
};
