import { ReactNode } from 'react';

export interface IModalComponentProps {
  onSave: () => void;
  onCancel: () => void;
  children: ReactNode;
  active: boolean;
  title: string;
}
