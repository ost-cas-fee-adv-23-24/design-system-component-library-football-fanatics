import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../components/textarea/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    value: {
      controls: { type: 'text' },
    },
    placeholder: {
      controls: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
    required: {
      controls: { type: 'boolean' },
    },
    autoCorrect: {
      options: ['on', 'off'],
      control: { type: 'select' },
    },
    spellCheck: {
      controls: { type: 'boolean' },
    },
    minLength: {
      controls: { type: 'number' },
    },
    maxLength: {
      controls: { type: 'number' },
    },
    disabled: {
      controls: { type: 'boolean' },
    },
    readOnly: {
      controls: { type: 'boolean' },
    },
    rows: {
      controls: { type: 'number' },
    },
    name: {
      controls: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    value: 'This is a textarea',
    placeholder: 'Placeholder',
    required: false,
    autoCorrect: 'on',
    spellCheck: true,
    minLength: 0,
    maxLength: 100,
    disabled: false,
    readOnly: false,
    rows: 3,
    name: 'name',
  },
};
