import { File } from 'buffer';

import { EAvatarSizes } from './avatar.enum';

export interface IAvatarComponentProps {
  imgSrc?: string;
  name?: string;
  onSuccess: (file: File) => void;
  onError: (error: Error) => void;
  editable?: boolean;
  size: EAvatarSizes;
}
