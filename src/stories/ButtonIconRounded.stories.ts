import type { Meta, StoryObj } from '@storybook/react';

import ButtonIconRounded from '../components/button/ButtonIconRounded';
import { EIConTypes } from '../components/icon/icon.enum';

const meta: Meta<typeof ButtonIconRounded> = {
  title: 'Components/ButtonIconRounded',
  component: ButtonIconRounded,
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

export const buttonIconRounded: Story = {
  args: {
    label: 'Username',
    icon: EIConTypes.PROFILE,
    onClickEvent: () => {},
  },
};
