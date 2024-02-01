import React from 'react';

import { EIConTypes, Icon } from '../icon';
import { ELogoColors, ELogoPositions } from './utils/logo.enum';
import { ILogoComponentProps } from './utils/logo.interface';
import MumbleGradient from './svg/mumble_gradient';
import MumbleViolet from './svg/mumble_violet';
import MumbleWhite from './svg/mumble_white';

export const Logo = ({
  color = ELogoColors.VIOLET,
  logoPosition,
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
  let cssColorLogo;
  switch (color) {
    case ELogoColors.WHITE:
      logo = <MumbleWhite />;
      cssColorLogo = 'text-white';
      break;
    case ELogoColors.GRADIENT:
      logo = <MumbleGradient />;
      cssColorLogo = 'text-violet-500';
      break;
    default:
      logo = <MumbleViolet />;
      cssColorLogo = 'text-violet-500';
      break;
  }

  return (
    <div className={topContainer.join(' ')}>
      <div className={`w-16 h-16 ${logoPositionClasses} ${cssColorLogo}`}>
        <Icon type={EIConTypes.MUMBLE} fitParent={true} />
      </div>

      <div className="c-logo__slogan">{logo}</div>
    </div>
  );
};
