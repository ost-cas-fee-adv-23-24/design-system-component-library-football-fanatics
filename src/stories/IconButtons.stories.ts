import type { Meta, StoryObj } from '@storybook/react';

import { ButtonIcon } from '../components/button';
import { EButtonTypes } from '../components/button';
import { EIConTypes } from '../components/icon';

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
    onCustomClick: () => {},
    name: 'username',
  },
};

export const IconButtonTimestampGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Timestamp',
    icon: EIConTypes.TIME,
    onCustomClick: () => {},
    name: 'username2',
  },
};

export const IconButtonLocationGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Location',
    icon: EIConTypes.LOCATION,
    name: 'username3',
    onCustomClick: () => {},
  },
};

export const IconButtonJoinedGray: Story = {
  args: {
    type: EButtonTypes.SECONDARY,
    label: 'Joined',
    icon: EIConTypes.CALENDAR,
    onCustomClick: () => {},
    name: 'username4',
  },
};
