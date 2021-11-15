import { useCallback, useEffect, useState } from 'react';
import create from 'zustand';
import { ClassRoomDeskData } from '../data/classroomDesk-data';
import { useParticipantsStore } from './user';

type RoomStoreData = {
  rooms: ClassRoomDeskData[];
  setRooms: (rooms: ClassRoomDeskData[]) => void;
};
export const useRoomStore = create<RoomStoreData>((set) => ({
  rooms: [],
  setRooms: (rooms) => set({ rooms }),
}));

export const useDetectRoomEnter = (
  roomId: number
): [detectEnter: () => void, detectLeave: () => void, peopleInRoom: number] => {
  const participants = useParticipantsStore((state) => state.participants);
  const [numberInRoom, setNumberInRoom] = useState(0);
  useEffect(() => {
    let people = 0;
    console.log(`roomid:${roomId}`);
    console.log(participants);
    participants.forEach((p) => {
      if (p.room === roomId) {
        people++;
      }
    });
    console.log(`people: ${people}`);
    setNumberInRoom(people);
  }, [participants, roomId]);
  const detectEnter = useCallback(() => {
    participants.forEach((participant) => {
      if (participant.isDragged && participant.room !== roomId) {
        participant.room = roomId;
        setNumberInRoom((prevNumber) => prevNumber + 1);
      }
    });
  }, [participants, roomId]);
  const detectLeave = useCallback(() => {
    participants.forEach((participant) => {
      if (participant.isDragged && participant.room === roomId) {
        participant.room = null;
        setNumberInRoom((prevNumber) => prevNumber - 1);
      }
    });
  }, [participants, roomId]);
  return [detectEnter, detectLeave, numberInRoom];
};
