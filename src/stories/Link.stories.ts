import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../components/button';
import { EIConTypes } from '../components/icon';

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
      options: ['right', 'left'],
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
    iconPosition: 'right',
  },
};
