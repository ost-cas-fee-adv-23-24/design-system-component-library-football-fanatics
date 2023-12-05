import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button/Button';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonTypes,
} from '../components/button/button.enum';
import { EIConTypes } from '../components/icon/icon.enum';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/TimedButton',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    kind: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    icon: {
      options: EIConTypes,
    },
    iconPosition: {
      options: [EButtonIconPosition.RIGHT, EButtonIconPosition.LEFT],
    },
    onlyIcon: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    onClickEvent: {
      table: {
        disable: true,
      },
    },
    openInNewTab: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TimedButton: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Link',
    kind: EButtonKinds.COPY_TO_CLIPBOARD,
    icon: EIConTypes.SHARE,
    clipboardData: 'https://www.google.com',
    clipboardHighlightDelay: 3000,
  },
};
