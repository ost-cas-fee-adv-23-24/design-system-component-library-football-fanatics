import type { Meta, StoryObj } from '@storybook/react';

import { EButtonTypes } from '../components/button/button.enum';
import { EIConTypes } from '../components/icon/icon.enum';
import { ButtonIcon } from '../components/button/ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/IconButtons',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: [EButtonTypes.PRIMARY, EButtonTypes.SECONDARY],
    },
    icon: {
      options: EIConTypes,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonUserBlue: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Username',
    icon: EIConTypes.PROFILE,
    onClickEvent: () => {},
  },
};

export const IconButtonTimestampGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Timestamp',
    icon: EIConTypes.TIME,
    onClickEvent: () => {},
  },
};

export const IconButtonLocationGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Location',
    icon: EIConTypes.LOCATION,
    onClickEvent: () => {},
  },
};

export const IconButtonJoinedGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Joined',
    icon: EIConTypes.CALENDAR,
    onClickEvent: () => {},
  },
};
