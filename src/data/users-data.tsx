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
};
export const participants: UsersDataRecord = {
  user1: {
    id: 0,
    name: 'Tadeáš Kyral',
    initials: 'TD',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
  },
  user2: {
    id: 1,
    name: 'Dominik Kouba',
    initials: 'DK',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
  },
  user3: {
    id: 3,
    name: 'Martina Klimešová',
    initials: 'MK',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
  },
  user4: {
    id: 4,
    name: 'Dominika Palivcová',
    initials: 'DP',
    isSpeaking: false,
    isHandRaised: true,
    isOnline: true,
  },
  user5: {
    id: 5,
    name: 'Dominika Krupařová',
    initials: 'DK',
    isSpeaking: true,
    isHandRaised: false,
    isOnline: true,
  },
  user6: {
    id: 6,
    name: 'Denis Baručić',
    initials: 'DB',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: true,
  },
  user7: {
    id: 7,
    name: 'Marek Daník',
    initials: 'MD',
    isSpeaking: false,
    isHandRaised: false,
    isOnline: false,
  },
  user8: {
    id: 8,
    name: 'Martin Zelený',
    initials: 'MZ',
    isSpeaking: false,
    isHandRaised: true,
    isOnline: false,
  },
};
