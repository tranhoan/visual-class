import { useCallback } from 'react';
import { useParticipantsStore } from './user';

export const useDetectRoomEnter = (
  roomId: number
): [detectEnter: () => void, detectLeave: () => void] => {
  const participants = useParticipantsStore((state) => state.participants);
  const detectEnter = useCallback(() => {
    participants.forEach((participant) => {
      if (participant.isDragged) {
        participant.room = roomId;
      }
    });
  }, [participants, roomId]);
  const detectLeave = useCallback(() => {
    participants.forEach((participant) => {
      if (participant.isDragged && participant.room === roomId) {
        participant.room = null;
      }
    });
  }, [participants, roomId]);
  return [detectEnter, detectLeave];
};
