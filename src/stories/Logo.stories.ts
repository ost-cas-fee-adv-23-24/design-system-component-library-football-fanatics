import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '../components/logo/Logo';
import { ELogoPositions,ELogoTypes } from '../components/logo/utils/logo.enum';
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
      options: ELogoTypes,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoLeftVioletHeader: Story = {
  args: {
    color: ELogoTypes.HEADER,
    logoPosition: ELogoPositions.LEFT,
  },
};
export const LogoLeftViolet: Story = {
  args: {
    color: ELogoTypes.VIOLET,
    logoPosition: ELogoPositions.LEFT,
  },
};

export const LogoLeftGradient: Story = {
  args: {
    color: ELogoTypes.GRADIENT,
    logoPosition: ELogoPositions.LEFT,
  },
};

export const LogoLeftWhite: Story = {
  args: {
    color: ELogoTypes.WHITE,
    logoPosition: ELogoPositions.LEFT,
  },
};

export const LogoTopWhite: Story = {
  args: {
    color: ELogoTypes.WHITE,
    logoPosition: ELogoPositions.TOP,
  },
};

export const LogoTopViolet: Story = {
  args: {
    color: ELogoTypes.VIOLET,
    logoPosition: ELogoPositions.TOP,
  },
};

export const LogoTopGradient: Story = {
  args: {
    color: ELogoTypes.GRADIENT,
    logoPosition: ELogoPositions.TOP,
  },
};
