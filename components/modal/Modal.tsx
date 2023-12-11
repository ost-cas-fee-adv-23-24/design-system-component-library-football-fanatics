/**
 * Author: bladimirardiles
 * Component File Name: Modal.js
 * Component Name: Modal
 * Project: design-system
 * Date: Sun 10/12/2023 - 21:21
 */

import React from 'react';
import Button from '../button/Button';
import { IModalComponentProps } from './modal.interface';
import { EIConTypes } from '../icon/icon.enum';
import {
  EButtonIconPosition,
  EButtonSizes,
  EButtonTypes,
} from '../button/button.enum';
import {
  actions,
  content,
  header,
  overlay,
  title as titleClasses,
  topContainer,
} from './modal-css';

const Modal = ({
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
          {/*we can change the button for a div with a single icon with attached events. */}
          {/*Or update the button to not show hover/pressed states*/}
          <Button
            size={EButtonSizes.SMALL}
            type={EButtonTypes.SECONDARY}
            label=""
            onlyIcon={true}
            icon={EIConTypes.CANCEL}
            onClickEvent={onCancel} // set active to false in parent
          />
        </div>
        <div className={`c-modal__content ${content.join(' ')}`}>
          {children}
        </div>
        <div className={`c-modal__actions ${actions.join(' ')}`}>
          <div className="w-full mr-4">
            <Button
              fitParent={true}
              iconPosition={EButtonIconPosition.RIGHT}
              icon={EIConTypes.CANCEL}
              label="Cancel"
              onClickEvent={() => {
                onCancel(); // set active to false in parent
              }}
            />
          </div>
          <div className="w-full">
            <Button
              fitParent={true}
              type={EButtonTypes.SECONDARY}
              iconPosition={EButtonIconPosition.RIGHT}
              icon={EIConTypes.CHECKMARK}
              label="Save"
              onClickEvent={() => {
                onSave();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
