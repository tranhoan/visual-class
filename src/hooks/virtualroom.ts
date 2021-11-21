import { useCallback, useEffect, useState } from 'react';
import create from 'zustand';
import { ClassRoomDeskData } from '../data/classroomDesk-data';
import { useParticipantsStore } from './user';
import { useNavigate } from 'react-router-dom';

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
): [
  detectEnter: (link?: string) => void,
  detectLeave: () => void,
  peopleInRoom: number
] => {
  const [participants, setParticipants] = useParticipantsStore((state) => [
    state.participants,
    state.setUsers,
  ]);
  const [numberInRoom, setNumberInRoom] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let people = 0;
    participants.forEach((p) => {
      if (p.room === roomId) {
        people++;
      }
    });
    setNumberInRoom(people);
  }, [participants, roomId]);
  const detectEnter = useCallback(
    (newRoomLink) => {
      participants.forEach((participant) => {
        if (participant.isDragged && participant.room !== roomId) {
          if (newRoomLink != null) {
            setParticipants([]);
            navigate(newRoomLink);
          } else {
            const newParticipants = [...participants];
            newParticipants[participant.id].room = roomId;
            setParticipants(newParticipants);
            setNumberInRoom((prevNumber) => prevNumber + 1);
          }
        }
      });
    },
    [participants, roomId, setParticipants, navigate]
  );
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

export const useCreateGroups = (): [createGroups: () => void] => {
  const [participants, setParticipants] = useParticipantsStore((state) => [
    state.participants,
    state.setUsers,
  ]);

  const createGroups = () => {
    const newParticipants = [...participants];
    newParticipants[0].room = 1;
    newParticipants[0].roomPosition = { x: 2000, y: 650 };
    newParticipants[1].room = 1;
    newParticipants[1].roomPosition = { x: 1950, y: 700 };
    newParticipants[6].room = 3;
    newParticipants[6].roomPosition = { x: 2769, y: 700 };
    newParticipants[7].room = 3;
    newParticipants[7].roomPosition = { x: 2599, y: 650 };

    setParticipants(newParticipants);
  };

  return [createGroups];
};
