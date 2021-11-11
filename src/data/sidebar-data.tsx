import { ReactElement } from 'react';
import { HiChartPie, HiChatAlt2, HiCog, HiUsers } from 'react-icons/hi';
import { SidebarContentType } from '../components/sidebar/SidebarContentFactory';

export type ToolbarData = {
  tooltip: string;
  type: SidebarContentType;
  icon: ReactElement;
};

export const sidebarData = {
  participants: {
    tooltip: 'Participanti',
    type: SidebarContentType.PARTICIPANTS,
    icon: <HiUsers />,
  },
  quiz: {
    tooltip: 'Kvízy',
    type: SidebarContentType.QUIZ,
    icon: <HiChartPie />,
  },
  chat: {
    tooltip: 'Společný chat',
    type: SidebarContentType.CHAT,
    icon: <HiChatAlt2 />,
  },
  settings: {
    tooltip: 'Nastavení',
    type: SidebarContentType.SETTINGS,
    icon: <HiCog />,
  },
};
