import React from 'react';

import { Button, ButtonIcon, EButtonTypes } from '../button';
import { EIConTypes } from '../icon';
import { IModalComponentProps } from './utils/modal.interface';

// TODO ADD Accessibility
export const Modal = ({
  children,
  onSave,
  onCancel,
  active,
  title,
}: IModalComponentProps) => {
  return (
    <div
      className={`${
        active
          ? 'bg-violet-500 bg-opacity-10 absolute top-0 bottom-0 right-0 left-0 w-screen h-screen flex items-center justify-center z-40'
          : 'hidden'
      }`}
      onKeyDown={(evt) => {
        if (evt.key === 'Escape') {
          onCancel(); // set active to false in parent
        }
      }}
    >
      <div className="w-[600px] flex flex-col m-2">
        <div className="bg-violet-600 flex pt-6 pb-6 pl-8 pr-8 justify-between items-center self-stretch rounded-t-2xl">
          <h5 className="text-white text-3xl not-italic font-semibold leading-10">
            {title}
          </h5>

          <ButtonIcon
            name="close-modal"
            disabled={false}
            type={EButtonTypes.SECONDARY}
            label=""
            icon={EIConTypes.CANCEL}
            onCustomClick={onCancel} // set active to false in parent
          />
        </div>

        <div className="bg-white py-8 px-8 grow">{children}</div>

        <div className="bg-white flex justify-between py-8 px-8">
          <div className="w-full mr-4">
            <Button
              name="modal-close-button"
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
              name="modal-save-button"
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
