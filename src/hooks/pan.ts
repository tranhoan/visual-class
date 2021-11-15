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

export type PanStoreData = {
  isPanDisabled: boolean;
  setIsPanDisabled: (isPanDisabled: boolean) => void;
};

export type ZoomStoreData = {
  zoomLevel: number;
  setZoomLevel: (zoom: number) => void;
};

export const usePanStore = create<PanStoreData>((set) => ({
  isPanDisabled: false,
  setIsPanDisabled: (isPanDisabled) => set({ isPanDisabled }),
}));

export const useZoomStore = create<ZoomStoreData>((set) => ({
  zoomLevel: 1,
  setZoomLevel: (zoomLevel) => set({ zoomLevel: zoomLevel }),
}));

const origin = { x: 0, y: 0 };

const usePan = (
  dragId?: number
): [Point, (e: SyntheticMouseEvent) => void, boolean] => {
  const [isPointerEventDisabled, setIsPointerEventDisabled] =
    useState<boolean>(false);
  const participants = useParticipantsStore((state) => state.participants);
  const shift = useRef(origin);
  const initialPosition =
    dragId == null ? origin : participants[dragId].roomPosition;
  const [panState, setPanState] = useState<Point>(initialPosition);
  const setIsPanDisabled = usePanStore((state) => state.setIsPanDisabled);
  const zoom = useZoomStore((state) => state.zoomLevel);
  const pan = useCallback(
    (e: MouseEvent) => {
      if (dragId != null) {
        participants[dragId].isDragged = true;
      }
      const currentPosition = { x: e.clientX, y: e.clientY };
      const delta = {
        x: (currentPosition.x - shift.current.x) / zoom,
        y: (currentPosition.y - shift.current.y) / zoom,
      };
      shift.current = { x: e.clientX, y: e.clientY };
      setIsPointerEventDisabled(true);
      setPanState((prevState) => {
        const offset = {
          x: prevState.x + delta.x,
          y: prevState.y + delta.y,
        };
        return offset;
      });
    },
    [zoom, dragId, participants]
  );
  const endPan = useCallback(() => {
    setIsPanDisabled(false);
    if (dragId != null) {
      participants[dragId].isDragged = false;
    }
    setIsPointerEventDisabled(false);
    document.removeEventListener('mousemove', pan);
    document.removeEventListener('mouseup', endPan);
  }, [pan, setIsPanDisabled, participants, dragId]);
  const startPan = useCallback(
    (e: SyntheticMouseEvent) => {
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
