import { Point } from '../hooks/pan';

interface ClassRoomDeskDataRecord {
  [key: string]: ClassRoomDeskData;
}

export type ClassRoomDeskData = {
  id: number;
  name: string;
  position: Point;
};
export const classroomDeskData: ClassRoomDeskDataRecord = {
  desk1: {
    id: 0,
    name: 'Lavice 1',
    position: { x: 1600, y: 550 },
  },
  desk2: {
    id: 1,
    name: 'Lavice 2',
    position: { x: 1923, y: 550 },
  },
  desk3: {
    id: 2,
    name: 'Lavice 3',
    position: { x: 2246, y: 550 },
  },
  desk4: {
    id: 3,
    name: 'Lavice 4',
    position: { x: 2569, y: 550 },
  },
  desk5: {
    id: 4,
    name: 'Lavice 5',
    position: { x: 1600, y: 830 },
  },
  desk6: {
    id: 5,
    name: 'Lavice 6',
    position: { x: 1923, y: 830 },
  },
  desk7: {
    id: 6,
    name: 'Lavice 7',
    position: { x: 2246, y: 830 },
  },
  desk8: {
    id: 7,
    name: 'Lavice 8',
    position: { x: 2569, y: 830 },
  },
};
