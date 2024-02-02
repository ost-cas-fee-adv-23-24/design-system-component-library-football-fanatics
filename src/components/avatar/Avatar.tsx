import { File } from 'buffer';
import { get as _get } from 'lodash';
import React, { useId } from 'react';

import { ButtonIconRounded } from '../button';
import { EIConTypes } from '../icon';
import { Image } from '../image';
import { EImageLoadingType } from '../image';
import { EAvatarSizes } from './utils/avatar.enum';
import { IAvatarComponentProps } from './utils/avatar.interface';

export const Avatar = ({
  imgSrc,
  onError,
  onSuccess,
  name,
  editable = false,
  size = EAvatarSizes.SM,
}: IAvatarComponentProps) => {
  let sizesClasses = '';
  if (editable || size === EAvatarSizes.XL) {
    sizesClasses = 'border-[6px] w-[160px] h-[160px]';
  } else {
    switch (size) {
      case EAvatarSizes.SM:
        sizesClasses = 'w-[40px] h-[40px]';
        break;
      case EAvatarSizes.MD:
        sizesClasses = 'border-[6px] w-[64px] h-[64px]';
        break;
      case EAvatarSizes.LG:
        sizesClasses = 'border-[6px] w-[96px] h-[96px]';
        break;
    }
  }

  const identifier = useId();
  return (
    <div className="relative">
      <div
        className={`bg-violet-200 overflow-hidden rounded-full border-slate-100 ${sizesClasses}`}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={name ? name : ''}
            loadingType={EImageLoadingType.EAGER}
          />
        )}
      </div>

      {editable && (
        <div className="absolute bottom-0 right-0">
          <input
            id={identifier}
            accept="image/*"
            className="hidden"
            onChange={(evt) => {
              try {
                const imageFile: File | null = _get(
                  evt,
                  'currentTarget.files[0]',
                  null,
                );
                if (imageFile) {
                  onSuccess(imageFile as File);
                } else {
                  throw new Error('No image selected/found');
                }
              } catch (error) {
                onError(error as Error);
              }
            }}
            name={identifier}
            placeholder=""
            spellCheck="false"
            type="file"
          />

          <div className="relative">
            <label
              className="cursor-pointer bg-transparent inline-block absolute top-0 left-0 bottom-0 w-16 h-16"
              htmlFor={identifier}
            />

            <ButtonIconRounded
              disabled={false}
              label="edit"
              icon={EIConTypes.EDIT}
              onCustomClick={() => {}}
            />
          </div>
        </div>
      )}
    </div>
  );
};
