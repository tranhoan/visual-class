import { Point } from '../hooks/pan';

interface RoomsDataRecord {
  [key: string]: RoomsData;
}

export type RoomsData = {
  id: number;
  currentTeacher: string;
  initials: string;
  name: string;
  position: Point;
  link: string;
};
export const roomsData: RoomsDataRecord = {
  room1: {
    id: 0,
    currentTeacher: 'Tadeáš Kyral',
    initials: 'TK',
    name: 'I.AG',
    position: { x: 1600, y: 550 },
    link: '/inclass/classroom',
  },
  room2: {
    id: 1,
    currentTeacher: 'Dominik Kouba',
    initials: 'DK',
    name: 'II.AG',
    position: { x: 1923, y: 550 },
    link: '/inclass/classroom',
  },
  room3: {
    id: 2,
    currentTeacher: 'Dominika Palivcová',
    initials: 'DP',
    name: 'III.AG',
    position: { x: 2246, y: 550 },
    link: '/inclass/classroom',
  },
  room4: {
    id: 3,
    currentTeacher: 'Marek Daník',
    initials: 'MD',
    name: 'V.AG',
    position: { x: 2569, y: 550 },
    link: '/inclass/classroom',
  },
  room5: {
    id: 4,
    currentTeacher: 'Vojtěch Chmelař',
    initials: 'VC',
    name: 'VI.AG',
    position: { x: 1600, y: 830 },
    link: '/inclass/classroom',
  },
  room6: {
    id: 5,
    currentTeacher: 'Martin Zelený',
    initials: 'MZ',
    name: 'VI.BG',
    position: { x: 1923, y: 830 },
    link: '/inclass/classroom',
  },
  room7: {
    id: 6,
    currentTeacher: 'Nikita Hošnová',
    initials: 'EC',
    name: 'VII.AG',
    position: { x: 2246, y: 830 },
    link: '/inclass/classroom',
  },
  room8: {
    id: 7,
    currentTeacher: 'Hoang Tran',
    initials: 'HT',
    name: 'VII.BG',
    position: { x: 2569, y: 830 },
    link: '/inclass/classroom',
  },
};
