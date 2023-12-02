import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button/Button';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonSizes,
  EButtonTypes,
} from '../components/button/button.enum';
import { EIConTypes } from '../components/icon/icon.enum';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Components/Link',
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Link',
    kind: EButtonKinds.LINK,
    href: 'https://www.google.com',
  },
};

export const LinkWithIconRight: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Link',
    kind: EButtonKinds.LINK,
    icon: EIConTypes.ARROW_RIGHT,
    iconPosition: EButtonIconPosition.RIGHT,
    href: 'https://www.google.com',
  },
};

export const LinkWithIconLeft: Story = {
  args: {
    type: EButtonTypes.PRIMARY,
    label: 'Link',
    kind: EButtonKinds.LINK,
    icon: EIConTypes.ARROW_LEFT,
    iconPosition: EButtonIconPosition.LEFT,
    href: 'https://www.google.com',
  },
};
