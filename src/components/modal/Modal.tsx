import React from 'react';

import { Button, ButtonIcon, EButtonTypes } from '../button';
import { EIConTypes } from '../icon';
import { IModalComponentProps } from './modal.interface';
import {
  actions,
  content,
  header,
  overlay,
  title as titleClasses,
  topContainer,
} from './modal-css';

export const Modal = ({
  children,
  onSave,
  onCancel,
  active,
  title,
}: IModalComponentProps) => {
  return (
    <div
      className={`c-modal ${active ? overlay.join(' ') : 'hidden'}`}
      onKeyDown={(evt) => {
        if (evt.key === 'Escape') {
          onCancel(); // set active to false in parent
        }
      }}
    >
      <div className={`c-modal__wrapper ${topContainer.join(' ')}`}>
        <div className={`c-modal__header ${header.join(' ')}`}>
          <h5 className={`c-modal__title ${titleClasses.join(' ')}`}>
            {title}
          </h5>

          <ButtonIcon
            disabled={false}
            type={EButtonTypes.SECONDARY}
            label=""
            icon={EIConTypes.CANCEL}
            onCustomClick={onCancel} // set active to false in parent
          />
        </div>
        <div className={`c-modal__content ${content.join(' ')}`}>
          {children}
        </div>
        <div className={`c-modal__actions ${actions.join(' ')}`}>
          <div className="w-full mr-4">
            <Button
              fitParent={true}
              icon={EIConTypes.CANCEL}
              label="Cancel"
              onCustomClick={() => {
                onCancel(); // set active to false in parent
              }}
            />
          </div>
          <div className="w-full">
            <Button
              fitParent={true}
              type={EButtonTypes.SECONDARY}
              icon={EIConTypes.CHECKMARK}
              label="Save"
              onCustomClick={() => {
                onSave();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
