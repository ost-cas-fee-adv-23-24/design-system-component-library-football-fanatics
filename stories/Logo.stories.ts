import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../components/logo/Logo';
import { ELogoColors, ELogoPositions } from '../components/logo/logo.enum';
const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    logoPosition: {
      control: { type: 'select' },
      options: ELogoPositions,
    },
    color: {
      control: { type: 'select' },
      options: ELogoColors,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoLeftViolet: Story = {
  args: {
    color: ELogoColors.VIOLET,
    logoPosition: ELogoPositions.LEFT,
  },
};

export const LogoLeftGradient: Story = {
  args: {
    color: ELogoColors.GRADIENT,
    logoPosition: ELogoPositions.LEFT,
  },
};

export const LogoLeftWhite: Story = {
  args: {
    color: ELogoColors.WHITE,
    logoPosition: ELogoPositions.LEFT,
  },
};

export const LogoTopWhite: Story = {
  args: {
    color: ELogoColors.WHITE,
    logoPosition: ELogoPositions.TOP,
  },
};

export const LogoTopViolet: Story = {
  args: {
    color: ELogoColors.VIOLET,
    logoPosition: ELogoPositions.TOP,
  },
};

export const LogoTopGradient: Story = {
  args: {
    color: ELogoColors.GRADIENT,
    logoPosition: ELogoPositions.TOP,
  },
};
