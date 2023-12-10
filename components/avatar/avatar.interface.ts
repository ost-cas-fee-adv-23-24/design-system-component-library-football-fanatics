import { File } from 'buffer';
import { EAvatarSizes } from './avata.enum';

export interface IAvatarComponentProps {
  imgSrc?: string;
  name?: string;
  onSuccess: (data: {
    file: File;
    fileData: { name: string; type: string; size: number };
  }) => void;
  onError: (error: Error) => void;
  editable: boolean;
  size: EAvatarSizes.LG | EAvatarSizes.MD | EAvatarSizes.SM | EAvatarSizes.XL;
}
