export interface ITabsItemProps {
  isActive: boolean;
  text: string;
  onClick?: () => void;
  identifier: string;
}

export interface ITabsProps {
  updateSelection: (index: number) => void;
  tabItems: Array<ITabsItemProps>;
}

export interface ITabSingleItemProps {
  isActive: boolean;
  text: string;
  onClick?: () => void;
  width: number;
  notifyValueToParent: ({
    width,
    identifier,
    position,
  }: INotificationValues) => void;
  position: number;
  identifier: string;
}

export interface INotificationValues {
  identifier: string;
  width: number;
  position: number;
}
