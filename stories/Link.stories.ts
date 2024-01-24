import type { Meta, StoryObj } from '@storybook/react';

import { EIConTypes } from '../components/icon/icon.enum';
import { Link } from '../components/button/ButtonLink';
import { EButtonIconPosition } from '../components/button/button.enum';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    icon: {
      options: EIConTypes,
    },
    iconPosition: {
      options: [EButtonIconPosition.RIGHT, EButtonIconPosition.LEFT],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkComponent: Story = {
  args: {
    label: 'Link in mumble',
    href: '#',
  },
};

export const LinkComponentWithIconLeft: Story = {
  args: {
    label: 'Link in mumble',
    href: '#',
    icon: EIConTypes.MUMBLE,
  },
};

export const LinkComponentWithIconRight: Story = {
  args: {
    label: 'Link in mumble',
    href: '#',
    icon: EIConTypes.MUMBLE,
    iconPosition: EButtonIconPosition.RIGHT,
  },
};
