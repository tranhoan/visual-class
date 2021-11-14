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
    room: null,
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
    room: null,
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
    room: null,
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
    room: null,
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
    room: null,
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
    room: null,
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
    room: null,
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
    room: null,
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
  },
};
