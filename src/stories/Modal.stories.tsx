import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../components/modal/Modal';
import { Label } from '../components/label/Label';
import { Paragraph } from '../components/typography/Paragraph';
import { Button } from '../components/button/Button';
import { Logo } from '../components/logo/Logo';
import { ELogoColors, ELogoPositions } from '../components/logo/logo.enum';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalOpen: Story = {
  args: {
    title: 'Modal Title',
    children: (
      <div>
        <div style={{ marginBottom: 20 }}>
          <Logo
            color={ELogoColors.GRADIENT}
            logoPosition={ELogoPositions.LEFT}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Label size="L" text="19 dias y 500 noches" htmlFor="test" />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Button label="dont click me" href="www.google.com" />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Paragraph
            size="L"
            text="Tanto la queria que tarde en aprender a olvidarla 19 dias y 500 noches"
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Logo color={ELogoColors.VIOLET} logoPosition={ELogoPositions.TOP} />
        </div>
      </div>
    ),
    active: true,
    onSave: () => {},
    onCancel: () => {},
  },
};
