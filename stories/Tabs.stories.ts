import type { Meta, StoryObj } from '@storybook/react';

import { TabsGroup } from '../components/tabs/TabsParent';

const meta: Meta<typeof TabsGroup> = {
  title: 'Components/Tabs',
  component: TabsGroup,
  tags: ['autodocs'],
  argTypes: {
    tabItems: {
      controls: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  args: {
    tabItems: [
      {
        text: 'Tab 0',
        isActive: true,
      },
      {
        text: 'Tab 1',
        isActive: false,
      },
      {
        text: 'Tab 2',
        isActive: false,
      },
    ]
  }
};

