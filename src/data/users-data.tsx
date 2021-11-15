import { Point } from '../hooks/pan';
import colors from '../style/colors';

export interface UsersDataRecord {
  [key: string]: UserType;
}
export type UserType = {
  id: number;
  name: string;
  initials: string;
  isSpeaking: boolean;
  isHandRaised: boolean;
  isOnline: boolean;
  color: string;
  isDragged: boolean;
  room: number | null;
  roomPosition: Point;
};
export const participants: UsersDataRecord = {
  user1: {
    id: 0,
    name: 'Tadeáš Kyral',
    initials: 'TD',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
    color: colors.additionalOrange2,
    isDragged: false,
    room: 0,
    roomPosition: { x: 1630, y: 600 },
  },
  user2: {
    id: 1,
    name: 'Dominik Kouba',
    initials: 'DK',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
    color: colors.addtionalBlue,
    isDragged: false,
    room: 0,
    roomPosition: { x: 1700, y: 650 },
  },
  user3: {
    id: 2,
    name: 'Martina Klimešová',
    initials: 'MK',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
    color: colors.additionalOrange,
    isDragged: false,
    room: 1,
    roomPosition: { x: 2050, y: 600 },
  },
  user4: {
    id: 3,
    name: 'Dominika Palivcová',
    initials: 'DP',
    isSpeaking: false,
    isHandRaised: true,
    isOnline: true,
    color: colors.additionalRed,
    isDragged: false,
    room: 1,
    roomPosition: { x: 2090, y: 650 },
  },
  user5: {
    id: 4,
    name: 'Dominika Krupařová',
    initials: 'DK',
    isSpeaking: true,
    isHandRaised: false,
    isOnline: true,
    color: colors.secondaryBlue,
    isDragged: false,
    room: 3,
    roomPosition: { x: 2729, y: 650 },
  },
  user6: {
    id: 5,
    name: 'Denis Baručić',
    initials: 'DB',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
    color: colors.successGreen,
    isDragged: false,
    room: 3,
    roomPosition: { x: 2669, y: 650 },
  },
  user7: {
    id: 6,
    name: 'Marek Daník',
    initials: 'MD',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: false,
    color: colors.textGrey,
    isDragged: false,
    room: 2,
    roomPosition: { x: 2276, y: 650 },
  },
  user8: {
    id: 7,
    name: 'Martin Zelený',
    initials: 'MZ',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: false,
    color: colors.darkGreen,
    isDragged: false,
    room: 6,
    roomPosition: { x: 2296, y: 950 },
  },
  user9: {
    id: 8,
    name: 'Hoang Tran',
    initials: 'HT',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
    color: colors.additionalOrange2,
    isDragged: false,
    room: null,
    roomPosition: { x: 2296, y: 350 },
  },
};
