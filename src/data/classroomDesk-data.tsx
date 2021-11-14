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
    name: 'Lavice1',
    position: { x: 710, y: 452 },
  },
};
