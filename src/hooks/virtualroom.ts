import { useCallback, useEffect, useState } from 'react';
import { useParticipantsStore } from './user';

export const useDetectRoomEnter = (
  roomId: number
): [detectEnter: () => void, detectLeave: () => void, peopleInRoom: number] => {
  const participants = useParticipantsStore((state) => state.participants);
  const [numberInRoom, setNumberInRoom] = useState(0);
  useEffect(() => {
    return () => {
      let people = 0;
      participants.forEach((p) => {
        if (p.room === roomId) {
          people++;
        }
      });
      setNumberInRoom(people);
    };
  }, [participants, roomId]);
  const detectEnter = useCallback(() => {
    participants.forEach((participant) => {
      if (participant.isDragged) {
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
