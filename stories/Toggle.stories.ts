import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '../components/toggle/Toggle';
import { EToggleKinds } from '../components/toggle/toggle.enums';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    kind: {
      options: EToggleKinds,
    },
    labelPlural: {
      table: {
        disable: true,
      },
    },
    labelSingular: {
      table: {
        disable: true,
      },
    },
    labelLiked: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ToggleLike: Story = {
  args: {
    kind: EToggleKinds.LIKE,
    labelPlural: 'Likes',
    labelSingular: 'Like',
    labelLiked: 'Liked',
    amount: 23,
  },
};

export const ToggleLikeZero: Story = {
  args: {
    kind: EToggleKinds.LIKE,
    labelPlural: 'Me gusta',
    labelSingular: 'Me gusta',
    labelLiked: 'Gustado',
  },
};

export const ToggleComment: Story = {
  args: {
    kind: EToggleKinds.COMMENT,
    labelPlural: 'Commentarios',
    labelSingular: 'Commentario',
    amount: 23,
  },
};

export const ToggleCommentZero: Story = {
  args: {
    kind: EToggleKinds.COMMENT,
    labelPlural: 'Kommentare',
    labelSingular: 'Kommentar',
  },
};
