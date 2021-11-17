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
  const [participants, setParticipants] = useParticipantsStore((state) => [
    state.participants,
    state.setUsers,
  ]);
  const [numberInRoom, setNumberInRoom] = useState(0);
  useEffect(() => {
    let people = 0;
    participants.forEach((p) => {
      if (p.room === roomId) {
        people++;
      }
    });
    setNumberInRoom(people);
  }, [participants, roomId]);
  const detectEnter = useCallback(() => {
    participants.forEach((participant) => {
      if (participant.isDragged && participant.room !== roomId) {
        const newParticipants = [...participants];
        newParticipants[participant.id].room = roomId;
        setParticipants(newParticipants);
        setNumberInRoom((prevNumber) => prevNumber + 1);
      }
    });
  }, [participants, roomId, setParticipants]);
  const detectLeave = useCallback(() => {
    participants.forEach((participant) => {
      if (participant.isDragged && participant.room === roomId) {
        const newParticipants = [...participants];
        newParticipants[participant.id].room = null;
        setParticipants(newParticipants);
        setNumberInRoom((prevNumber) => prevNumber - 1);
      }
    });
  }, [participants, roomId, setParticipants]);
  return [detectEnter, detectLeave, numberInRoom];
};
