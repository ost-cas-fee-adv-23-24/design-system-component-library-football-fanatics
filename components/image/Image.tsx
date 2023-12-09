/**
 * Author: bladimirardiles
 * Component File Name: Image.js
 * Component Name: Image
 * Project: design-system
 * Date: Sat 09/12/2023 - 11:19
 */

import { IImageComponentProps } from './image.interface';
import { EImageLoadingType } from './image.enum';
import { baseImageGeneral } from './image-css';

const Image = ({
  src,
  lazy = EImageLoadingType.EAGER,
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
        loading={lazy}
      />
    </div>
  );
};

export default Image;
