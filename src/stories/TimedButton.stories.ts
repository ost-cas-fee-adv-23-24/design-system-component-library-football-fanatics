import type { Meta, StoryObj } from '@storybook/react';

import { EIConTypes } from '../components/icon/icon.enum';
import { ButtonTimed } from '../components/button/ButtonTimed';

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
  },
};
