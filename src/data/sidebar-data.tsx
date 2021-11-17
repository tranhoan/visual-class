import { ReactElement } from 'react';
import { HiChartPie, HiChatAlt2, HiCog, HiUsers } from 'react-icons/hi';
import { SidebarContentType } from '../components/sidebar/SidebarContentFactory';

export interface SidebarDataRecord {
  [key: string]: SidebarData;
}
export type SidebarData = {
  tooltip: string;
  type: SidebarContentType;
  icon: ReactElement;
};

export const sidebarData: SidebarDataRecord = {
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
