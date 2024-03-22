import type { Meta, StoryObj } from '@storybook/react';

import { EStateCommonOnOff, Textarea } from '../components/textarea';

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

export const FilledTextarea: Story = {
  args: {
    value: 'This is a textarea',
    placeholder: 'Placeholder',
    required: false,
    autoCorrect: EStateCommonOnOff.OFF,
    spellCheck: true,
    minLength: 0,
    maxLength: 100,
    disabled: false,
    readOnly: false,
    rows: 3,
    name: 'name',
  },
};

export const EmptyTextarea: Story = {
  args: {
    value: '',
    placeholder: 'This is the Placeholder',
    required: true,
    autoCorrect: EStateCommonOnOff.OFF,
    spellCheck: false,
    disabled: false,
    readOnly: false,
  },
};
