import React from 'react';
import {
  MdDashboard,
  MdHistory,
  MdSettings,
  MdNotifications,
  MdPerson,
  MdSearch,
  MdMenu,
  MdClose,
  MdEdit,
  MdDelete,
  MdAdd,
  MdArrowBack,
  MdLogout,
  MdSell,
  MdAccountCircle,
} from 'react-icons/md';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  dashboard: MdDashboard,
  history: MdHistory,
  settings: MdSettings,
  notifications: MdNotifications,
  profile: MdPerson,
  search: MdSearch,
  menu: MdMenu,
  close: MdClose,
  edit: MdEdit,
  delete: MdDelete,
  add: MdAdd,
  arrowBack: MdArrowBack,
  logout: MdLogout,
  sell: MdSell,
  account: MdAccountCircle,
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;