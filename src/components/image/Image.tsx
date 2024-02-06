import { EImageLoadingType } from './utils/image.enum';
import { IImageComponentProps } from './utils/image.interface';

export const Image = ({
  src,
  loadingType = EImageLoadingType.EAGER,
  alt,
}: IImageComponentProps) => {
  return (
    <div className="relative block">
      <img
        className="block max-w-full w-full object-cover object-center"
        src={src}
        alt={alt}
        loading={loadingType}
      />
    </div>
  );
};
