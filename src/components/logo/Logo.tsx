import React from 'react';

import { EIConTypes, Icon } from '../icon';
import MumbleGradient from './svg/mumble_gradient';
import MumbleHeader from './svg/mumble_header';
import MumbleViolet from './svg/mumble_violet';
import MumbleWhite from './svg/mumble_white';
import { ELogoPositions,ELogoTypes } from './utils/logo.enum';
import { ILogoComponentProps } from './utils/logo.interface';

export const Logo = ({
  color = ELogoTypes.VIOLET,
  logoPosition,
  isHeader,
}: ILogoComponentProps) => {
  let topContainer = ['flex', 'items-center', 'justify-center'];
  let logoPositionClasses;
  switch (logoPosition) {
    case ELogoPositions.LEFT:
      topContainer = [...topContainer, 'flex-row'];
      logoPositionClasses = 'mr-6';
      break;
    case ELogoPositions.TOP:
      topContainer = [...topContainer, 'flex-col'];
      logoPositionClasses = 'mb-4';
      break;
  }

  let logo;
  let cssLogo;
  switch (color) {
    case ELogoTypes.WHITE:
      logo = <MumbleWhite />;
      cssLogo = 'w-16 h-16 text-white';
      break;
    case ELogoTypes.GRADIENT:
      logo = <MumbleGradient />;
      cssLogo = 'w-16 h-16 text-violet-500';
      break;
    case ELogoTypes.HEADER:
      logo = <MumbleHeader />;
      cssLogo = 'w-10 h-10 text-white';
      break;
    default:
      logo = (
        <div className="text-violet-500">
          <MumbleViolet />
        </div>
      );
      cssLogo = 'w-16 h-16 text-violet-500';
      break;
  }

  return (
    <div className={topContainer.join(' ')}>
      <div className={`${logoPositionClasses} ${cssLogo}`}>
        <Icon type={EIConTypes.MUMBLE} fitParent={true} />
      </div>

      <div>{logo}</div>
    </div>
  );
};
