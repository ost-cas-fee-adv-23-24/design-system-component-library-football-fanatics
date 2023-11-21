import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../components/typography/Heading';


const meta: Meta<typeof Heading> = {
  title: 'Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      options: ['1', '2', '3', '4'],
      control: { type: 'select' }
    },
    children: {
      controls: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Heading1: Story = {
  args: {
    level: '1',
    children: 'Überschrift 1',
  },
};
export const Heading2: Story = {
  args: {
    level: '2',
    children: 'Überschrift 2',
  },
};
export const Heading3: Story = {
  args: {
    level: '3',
    children: 'Überschrift 3',
  },
};
export const Heading4: Story = {
  args: {
    level: '4',
    children: 'Überschrift 4',
  },
};


