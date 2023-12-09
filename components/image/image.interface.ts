import { EImageLoadingType } from './image.enum';

export interface IImageComponentProps {
  src: string;
  alt: string;
  lazy: EImageLoadingType.LAZY | EImageLoadingType.EAGER;
}
