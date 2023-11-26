import type { Meta, StoryObj } from '@storybook/react';

import Icon from '../components/icon/Icon';
import { EIconSizes, EIConTypes } from '../components/icon/icon.enum';

export const iconOptions = [
  EIConTypes.ARROW_DOWN,
  EIConTypes.ARROW_LEFT,
  EIConTypes.ARROW_RIGHT,
  EIConTypes.ARROW_UP,
  EIConTypes.MUMBLE,
  EIConTypes.CALENDAR,
  EIConTypes.CANCEL,
  EIConTypes.CHECKMARK,
  EIConTypes.COMMENT_BORDERED,
  EIConTypes.COMMENT_FILLED,
  EIConTypes.EDIT,
  EIConTypes.EYE,
  EIConTypes.FULL_SCREEN,
  EIConTypes.HEART_BORDERED,
  EIConTypes.HEART_FILLED,
  EIConTypes.LOCATION,
  EIConTypes.LOGOUT,
  EIConTypes.PROFILE,
  EIConTypes.REPOST,
  EIConTypes.SEND,
  EIConTypes.SETTINGS,
  EIConTypes.SHARE,
  EIConTypes.TIME,
  EIConTypes.UPLOAD,
];

const meta: Meta<typeof Icon> = {
  title: 'Components/icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [EIconSizes.LG, EIconSizes.MD, EIconSizes.SM],
    },
    type: {
      control: { type: 'select' },
      options: iconOptions,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconArrowUp: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.ARROW_UP,
  },
};
export const IconArrowDown: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.ARROW_DOWN,
  },
};

export const IconArrowRight: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.ARROW_RIGHT,
  },
};

export const IconArrowLeft: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.ARROW_LEFT,
  },
};

export const IconCalendar: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.CALENDAR,
  },
};

export const IconCancel: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.CANCEL,
  },
};

export const IconCheckmark: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.CHECKMARK,
  },
};

export const IconCommentBordered: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.COMMENT_BORDERED,
  },
};

export const IconCommentFilled: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.COMMENT_FILLED,
  },
};

export const IconEdit: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.EDIT,
  },
};

export const IconEye: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.EYE,
  },
};

export const IconFullscreen: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.FULL_SCREEN,
  },
};

export const IconHeartBordered: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.HEART_BORDERED,
  },
};

export const IconHeartFilled: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.HEART_FILLED,
  },
};

export const IconHeartLocation: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.LOCATION,
  },
};

export const IconHeartLogout: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.LOGOUT,
  },
};

export const IconProfile: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.PROFILE,
  },
};

export const IconRepost: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.REPOST,
  },
};

export const IconSend: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.SEND,
  },
};

export const IconSettings: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.SETTINGS,
  },
};

export const IconShare: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.SHARE,
  },
};

export const IconTime: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.TIME,
  },
};

export const IconUpload: Story = {
  args: {
    size: EIconSizes.LG,
    type: EIConTypes.UPLOAD,
  },
};
