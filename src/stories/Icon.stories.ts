import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../components/icon';
import { EIconColors, EIConTypes } from '../components/icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icons',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: EIConTypes,
    },
    color: {
      control: { type: 'select' },
      options: EIconColors,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconArrowUp: Story = {
  args: {
    type: EIConTypes.ARROW_UP,
  },
};
export const IconArrowDown: Story = {
  args: {
    type: EIConTypes.ARROW_DOWN,
  },
};

export const IconArrowRight: Story = {
  args: {
    type: EIConTypes.ARROW_RIGHT,
  },
};

export const IconArrowLeft: Story = {
  args: {
    type: EIConTypes.ARROW_LEFT,
  },
};

export const IconCalendar: Story = {
  args: {
    type: EIConTypes.CALENDAR,
  },
};

export const IconCancel: Story = {
  args: {
    type: EIConTypes.CANCEL,
  },
};

export const IconCheckmark: Story = {
  args: {
    type: EIConTypes.CHECKMARK,
  },
};

export const IconCommentBordered: Story = {
  args: {
    type: EIConTypes.COMMENT_BORDERED,
  },
};

export const IconCommentFilled: Story = {
  args: {
    type: EIConTypes.COMMENT_FILLED,
  },
};

export const IconEdit: Story = {
  args: {
    type: EIConTypes.EDIT,
  },
};

export const IconEye: Story = {
  args: {
    type: EIConTypes.EYE,
  },
};

export const IconFullscreen: Story = {
  args: {
    type: EIConTypes.FULL_SCREEN,
  },
};

export const IconHeartBordered: Story = {
  args: {
    type: EIConTypes.HEART_BORDERED,
  },
};

export const IconHeartFilled: Story = {
  args: {
    type: EIConTypes.HEART_FILLED,
  },
};

export const IconHeartLocation: Story = {
  args: {
    type: EIConTypes.LOCATION,
  },
};

export const IconHeartLogout: Story = {
  args: {
    type: EIConTypes.LOGOUT,
  },
};

export const IconProfile: Story = {
  args: {
    type: EIConTypes.PROFILE,
  },
};

export const IconRepost: Story = {
  args: {
    type: EIConTypes.REPOST,
  },
};

export const IconSend: Story = {
  args: {
    type: EIConTypes.SEND,
  },
};

export const IconSettings: Story = {
  args: {
    type: EIConTypes.SETTINGS,
  },
};

export const IconShare: Story = {
  args: {
    type: EIConTypes.SHARE,
  },
};

export const IconTime: Story = {
  args: {
    type: EIConTypes.TIME,
  },
};

export const IconUpload: Story = {
  args: {
    type: EIConTypes.UPLOAD,
  },
};
