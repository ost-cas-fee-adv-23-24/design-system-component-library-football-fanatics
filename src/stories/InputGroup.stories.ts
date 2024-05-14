import type { Meta, StoryObj } from '@storybook/react';

import { EIConTypes } from '../components/icon';
import {
  EAutoCapitalizeOptions,
  EInputFieldGroupType,
  EStateInputFieldGroup,
  InputFieldGroup,
} from '../components/input-group';

const meta: Meta<typeof InputFieldGroup> = {
  title: 'Components/InputFieldGroup',
  component: InputFieldGroup,
  tags: ['autodocs'],
  argTypes: {
    as: {
      options: EInputFieldGroupType,
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
      options: EStateInputFieldGroup,
      control: { type: 'select' },
    },
    icon: {
      options: EIConTypes,
      control: { type: 'select' },
    },
    autoCapitalize: {
      options: EAutoCapitalizeOptions,
    },
    spellCheck: {
      controls: { type: 'boolean' },
    },
  },
};

// todo, add a wrapper to be able to update the texts on storybook (control the state of the component)
export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    as: EInputFieldGroupType.TEXT,
    labelText: 'Label',
    placeholder: 'Placeholder',
    errorMessage: 'Error Message',
    text: 'Text',
    required: true,
    state: EStateInputFieldGroup.DEFAULT,
    icon: EIConTypes.MUMBLE,
    notifyValueChange: (value: string) => console.log(value),
  },
};

export const InputError: Story = {
  args: {
    as: EInputFieldGroupType.TEXT,
    labelText: 'Label',
    placeholder: 'Placeholder',
    errorMessage: 'Error Message',
    text: 'Text',
    required: true,
    state: EStateInputFieldGroup.ERROR,
    icon: EIConTypes.MUMBLE,
    notifyValueChange: (value: string) => console.log(value),
  },
};
