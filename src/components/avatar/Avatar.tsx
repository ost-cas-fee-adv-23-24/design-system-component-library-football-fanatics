/**
 * Author: bladimirardiles
 * Component File Name: Avatar.js
 * Component Name: Avatar
 * Project: design-system
 * Date: Sat 09/12/2023 - 11:34
 */

import React, { useId, useMemo } from 'react';
import { IAvatarComponentProps } from './avatar.interface';
import { Button } from '../button/Button';
import { EIConTypes } from '../icon/icon.enum';
import { Image } from '../image/Image';
import { EImageLoadingType } from '../image/image.enum';
import { get as _get } from 'lodash';
import { File } from 'buffer';
import { EAvatarSizes } from './avata.enum';
import {
  editableLabel,
  topContainerLg,
  topContainerMd,
  topContainerSm,
  topContainerXl,
} from './avatar-css';

export const Avatar = ({
  imgSrc,
  onError,
  onSuccess,
  name,
  editable,
  size = EAvatarSizes.SM,
}: IAvatarComponentProps) => {
  const topContainerClasses = useMemo(() => {
    if (size === EAvatarSizes.XL || editable) {
      return topContainerXl.join(' ');
    } else if (size === EAvatarSizes.LG) {
      return topContainerLg.join(' ');
    } else if (size === EAvatarSizes.MD) {
      return topContainerMd.join(' ');
    } else if (size === EAvatarSizes.SM) {
      return topContainerSm.join(' ');
    }
  }, [size, editable]);

  const identifier = useId();
  return (
    <div className="c-avatar relative">
      <div className={topContainerClasses}>
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
            <label className={editableLabel.join(' ')} htmlFor={identifier} />

            <Button
              label="edit"
              onlyIcon={true}
              icon={EIConTypes.EDIT}
              onClickEvent={() => {}}
            />
          </div>
        </div>
      )}
    </div>
  );
};
