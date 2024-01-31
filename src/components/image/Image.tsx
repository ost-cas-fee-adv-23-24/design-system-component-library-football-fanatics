import { EImageLoadingType } from './image.enum';
import { IImageComponentProps } from './image.interface';
import { baseImageGeneral } from './image-css';

export const Image = ({
  src,
  loadingType = EImageLoadingType.EAGER,
  alt,
}: IImageComponentProps) => {
  const componentName = 'c-image';

  return (
    <div
      className={`${componentName} ${baseImageGeneral.topContainer.join(' ')}`}
    >
      <img
        className={`${baseImageGeneral.imageContainer.join(' ')}`}
        src={src}
        alt={alt}
        loading={loadingType}
      />
    </div>
  );
};
