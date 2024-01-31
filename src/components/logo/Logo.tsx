import React, { useMemo } from 'react';

import { EIConTypes, Icon } from '../icon';
import { iconColors, logoLeft, logoTop } from './css';
import { ELogoColors, ELogoPositions } from './logo.enum';
import { ILogoComponentProps } from './logo.interface';
import MumbleGradient from './svg/mumble_gradient';
import MumbleViolet from './svg/mumble_violet';
import MumbleWhite from './svg/mumble_white';

export const Logo = ({ color, logoPosition }: ILogoComponentProps) => {
  const componentName = 'c-logo';
  const positionDefinitions = useMemo(() => {
    let topContainer = [componentName];
    let logoContainer = ['c-logo__logo'];
    switch (logoPosition) {
      case ELogoPositions.LEFT:
        topContainer = [...topContainer, ...logoLeft.topContainer];
        logoContainer = [...logoContainer, ...logoLeft.logoContainer];
        break;
      case ELogoPositions.TOP:
        topContainer = [...topContainer, ...logoTop.topContainer];
        logoContainer = [...logoContainer, ...logoTop.logoContainer];
        break;
    }

    return {
      topContainer: topContainer.join(' '),
      logoContainer: logoContainer.join(' '),
    };
  }, [logoPosition]);

  const sloganComponent = useMemo(() => {
    let logo = <MumbleViolet />;
    let cssClasses = [iconColors.violet];
    switch (color) {
      case ELogoColors.WHITE:
        logo = <MumbleWhite />;
        cssClasses = [iconColors.white];
        break;
      case ELogoColors.VIOLET:
        logo = <MumbleViolet />;
        cssClasses = [iconColors.violet];
        break;
      case ELogoColors.GRADIENT:
        logo = <MumbleGradient />;
        cssClasses = [iconColors.gradient];
        break;
    }

    return {
      logo,
      cssClasses: cssClasses.join(' '),
    };
  }, [color]);

  return (
    <div className={positionDefinitions.topContainer}>
      <div
        className={`${positionDefinitions.logoContainer} ${sloganComponent.cssClasses}`}
      >
        <Icon type={EIConTypes.MUMBLE} fitParent={true} />
      </div>

      <div className="c-logo__slogan">{sloganComponent.logo}</div>
    </div>
  );
};
