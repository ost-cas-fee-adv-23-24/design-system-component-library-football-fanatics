import type { Meta, StoryObj } from '@storybook/react';
import { EIConTypes } from '../components/icon/icon.enum';
import { InputFieldGroup } from '../components/input-group/InputFieldGroup';
import { IconOptions } from './Icon.stories';

const meta: Meta<typeof InputFieldGroup> = {
  title: 'Components/InputFieldGroup',
  component: InputFieldGroup,
  tags: ['autodocs'],
  argTypes: {
    as: {
      options: [
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url',
        'search',
        'file',
        'hidden',
      ],
      control: { type: 'select' },
    },
    labelText: {
      controls: { type: 'text' },
    },
    placeholder: {
      controls: { type: 'text' },
    },
    errorMessage: {
      controls: { type: 'text' },
    },
    text: {
      controls: { type: 'text' },
    },
    required: {
      controls: { type: 'boolean' },
    },
    state: {
      options: ['default', 'error', 'success'],
      control: { type: 'select' },
    },
    onChange: {
      action: 'onChange',
    },
    icon: {
      options: IconOptions,
    },
    autoCorrect: {
      options: ['on', 'off'],
      control: { type: 'select' },
    },
    autoCapitalize: {
      options: ['sentences', 'on', 'words', 'characters', 'off', 'none'],
    },
    spellCheck: {
      options: [true, false],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    as: 'text',
    labelText: 'Label',
    placeholder: 'Placeholder',
    errorMessage: 'Error Message',
    text: 'Text',
    required: true,
    state: 'default',
    icon: EIConTypes.MUMBLE,
  },
};

export const InputError: Story = {
  args: {
    as: 'text',
    labelText: 'Label',
    placeholder: 'Placeholder',
    errorMessage: 'Error Message',
    text: 'Text',
    required: true,
    state: 'error',
    icon: EIConTypes.MUMBLE,
  },
};
