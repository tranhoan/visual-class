import {
  useCallback,
  useRef,
  useState,
  MouseEvent as SyntheticMouseEvent,
} from 'react';
import create from 'zustand';

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

const usePan = (): [Point, (e: SyntheticMouseEvent) => void] => {
  const [panState, setPanState] = useState<Point>(origin);
  const shift = useRef(origin);
  const setIsPanDisabled = usePanStore((state) => state.setIsPanDisabled);
  const zoom = useZoomStore((state) => state.zoomLevel);
  const pan = useCallback(
    (e: MouseEvent) => {
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
    [zoom]
  );
  const endPan = useCallback(() => {
    setIsPanDisabled(false);
    document.removeEventListener('mousemove', pan);
    document.removeEventListener('mouseup', endPan);
  }, [pan, setIsPanDisabled]);
  const startPan = useCallback(
    (e: SyntheticMouseEvent) => {
      shift.current = { x: e.clientX, y: e.clientY };
      setIsPanDisabled(true);
      document.addEventListener('mousemove', pan);
      document.addEventListener('mouseup', endPan);
    },
    [pan, endPan, setIsPanDisabled]
  );
  return [panState, startPan];
};

export default usePan;
