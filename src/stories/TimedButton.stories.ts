import type { Meta, StoryObj } from '@storybook/react';

import { ButtonTimed } from '../components/button';
import { EIConTypes } from '../components/icon';

const meta: Meta<typeof ButtonTimed> = {
  title: 'Components/TimedButton',
  component: ButtonTimed,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: EIConTypes,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TimedButton: Story = {
  args: {
    label: 'Copy link',
    icon: EIConTypes.SHARE,
    clipboardData: 'https://www.google.com',
    clipboardHighlightDelay: 3000,
    clipboardCopySuccessLabel: 'Copied!',
    name: 'copy-link',
  },
};
