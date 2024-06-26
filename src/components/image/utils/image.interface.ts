import { EImageLoadingType } from './image.enum';

export interface IImageComponentProps {
  src: string;
  alt: string;
  loadingType: EImageLoadingType.LAZY | EImageLoadingType.EAGER;
  height?: number;
  width?: number;
}
