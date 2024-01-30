import { File } from 'buffer';
import { EAvatarSizes } from './avata.enum';

export interface IAvatarComponentProps {
  imgSrc?: string;
  name?: string;
  onSuccess: (file: File) => void;
  onError: (error: Error) => void;
  editable: boolean;
  size: EAvatarSizes.LG | EAvatarSizes.MD | EAvatarSizes.SM | EAvatarSizes.XL;
}
