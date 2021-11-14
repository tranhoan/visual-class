import {
  useCallback,
  useRef,
  useState,
  MouseEvent as SyntheticMouseEvent,
} from 'react';
import create from 'zustand';
import { useParticipantsStore } from './user';

export type Point = {
  x: number;
  y: number;
};

export const usePanStore = create((set) => ({
  isPanDisabled: false,
  setIsPanDisabled: (isPanDisabled: boolean) => set({ isPanDisabled }),
}));

export const useZoomStore = create((set) => ({
  zoomLevel: 1,
  setZoomLevel: (zoomLevel: number) => set({ zoomLevel: zoomLevel }),
}));

const origin = { x: 0, y: 0 };

const usePan = (
  dragId?: number
): [Point, (e: SyntheticMouseEvent) => void, boolean] => {
  const [panState, setPanState] = useState<Point>(origin);
  const [isPointerEventDisabled, setIsPointerEventDisabled] =
    useState<boolean>(false);
  const shift = useRef(origin);
  const setIsPanDisabled = usePanStore((state) => state.setIsPanDisabled);
  const participantStore = useParticipantsStore();
  const zoom = useZoomStore((state) => state.zoomLevel);
  const pan = useCallback(
    (e: MouseEvent) => {
      if (dragId != null) {
        participantStore.participants[dragId].isDragged = true;
      }
      const currentPosition = { x: e.clientX, y: e.clientY };
      const delta = {
        x: (currentPosition.x - shift.current.x) / zoom,
        y: (currentPosition.y - shift.current.y) / zoom,
      };
      shift.current = { x: e.clientX, y: e.clientY };
      setPanState((prevState) => {
        const offset = {
          x: prevState.x + delta.x,
          y: prevState.y + delta.y,
        };
        return offset;
      });
    },
    [zoom, dragId, participantStore.participants]
  );
  const endPan = useCallback(() => {
    setIsPanDisabled(false);
    if (dragId != null) {
      participantStore.participants[dragId].isDragged = false;
    }
    setIsPointerEventDisabled(false);
    document.removeEventListener('mousemove', pan);
    document.removeEventListener('mouseup', endPan);
  }, [pan, setIsPanDisabled, participantStore.participants, dragId]);
  const startPan = useCallback(
    (e: SyntheticMouseEvent) => {
      setIsPointerEventDisabled(true);
      shift.current = { x: e.clientX, y: e.clientY };
      setIsPanDisabled(true);
      document.addEventListener('mousemove', pan);
      document.addEventListener('mouseup', endPan);
    },
    [pan, endPan, setIsPanDisabled]
  );
  return [panState, startPan, isPointerEventDisabled];
};

export default usePan;
