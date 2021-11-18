import { HiChatAlt2, HiCog, HiHome } from 'react-icons/hi';
import { SidebarContentType } from '../components/sidebar/SidebarContentFactory';
import { SidebarDataRecord } from './sidebar-data';

export const sidebarSchoolData: SidebarDataRecord = {
  participants: {
    tooltip: 'Třídy',
    type: SidebarContentType.ROOMS,
    icon: <HiHome />,
  },
  quiz: {
    tooltip: 'Školní chat',
    type: SidebarContentType.CHAT,
    icon: <HiChatAlt2 />,
  },
  settings: {
    tooltip: 'Nastavení',
    type: SidebarContentType.SETTINGS,
    icon: <HiCog />,
  },
};
