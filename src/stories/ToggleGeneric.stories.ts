import type { Meta, StoryObj } from '@storybook/react';

import { ToggleGeneric } from '../components/toggle/ToggleGeneric';
import { EIConTypes } from '../components/icon';

const meta: Meta<typeof ToggleGeneric> = {
  title: 'Components/ToggleGeneric',
  component: ToggleGeneric,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleGenericStory: Story = {
  args: {
    label: 'Delete',
    labelActive: 'Deleted',
    icon: EIConTypes.CANCEL,
  },
};
