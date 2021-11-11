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
  },
  user2: {
    id: 1,
    name: 'Dominik Kouba',
    initials: 'DK',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
    color: colors.addtionalBlue,
  },
  user3: {
    id: 3,
    name: 'Martina Klimešová',
    initials: 'MK',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
    color: colors.additionalOrange,
  },
  user4: {
    id: 4,
    name: 'Dominika Palivcová',
    initials: 'DP',
    isSpeaking: false,
    isHandRaised: true,
    isOnline: true,
    color: colors.additionalRed,
  },
  user5: {
    id: 5,
    name: 'Dominika Krupařová',
    initials: 'DK',
    isSpeaking: true,
    isHandRaised: false,
    isOnline: true,
    color: colors.secondaryBlue,
  },
  user6: {
    id: 6,
    name: 'Denis Baručić',
    initials: 'DB',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
    color: colors.successGreen,
  },
  user7: {
    id: 7,
    name: 'Marek Daník',
    initials: 'MD',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: false,
    color: colors.textGrey,
  },
  user8: {
    id: 8,
    name: 'Martin Zelený',
    initials: 'MZ',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: false,
    color: colors.darkGreen,
  },
};
