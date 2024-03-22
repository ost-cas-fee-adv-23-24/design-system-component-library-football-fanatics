import type { Meta, StoryObj } from '@storybook/react';

import { TabsGroup } from '../components/tabs/TabsParent';

const meta: Meta<typeof TabsGroup> = {
  title: 'Components/Tabs',
  component: TabsGroup,
  tags: ['autodocs'],
  argTypes: {
    tabItemsMock: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  args: {
    tabItemsMock: [
      {
        isActive: false,
        text: 'Tabbb 1',
        identifier: 'tab-1',
      },
      {
        isActive: false,
        text: 'Tab 2',
        identifier: 'tab-2',
      },
      {
        isActive: true,
        text: 'Tabitete 3',
        identifier: 'tab-3',
      },
      {
        isActive: false,
        text: 'Tabitete 4',
        identifier: 'tab-4',
      },
    ],
  },
};
