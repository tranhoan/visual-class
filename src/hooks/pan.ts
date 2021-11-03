import {
  useCallback,
  useRef,
  useState,
  MouseEvent as SyntheticMouseEvent,
  RefObject,
} from 'react';

export type Point = {
  x: number;
  y: number;
};

const origin = { x: 0, y: 0 };

function usePan(): [Point, (e: SyntheticMouseEvent) => void, boolean] {
  const [panState, setPanState] = useState<Point>(origin);
  const [isPanDisabled, setIsPanDisabled] = useState(false);
  const lastPoint = useRef(origin);

  const pan = useCallback((e: MouseEvent) => {
    const startPoint = lastPoint.current;
    const currentPoint = { x: e.pageX, y: e.pageY };
    lastPoint.current = currentPoint;

    setPanState((prevState) => {
      return {
        x: currentPoint.x - startPoint.x + prevState.x,
        y: currentPoint.y - startPoint.y + prevState.y,
      };
    });
  }, []);

  const endPan = useCallback(() => {
    setIsPanDisabled(false);
    document.removeEventListener('mousemove', pan);
    document.removeEventListener('mouseup', endPan);
  }, [pan]);
  const startPan = useCallback(
    (e: SyntheticMouseEvent) => {
      setIsPanDisabled(true);
      document.addEventListener('mousemove', pan);
      document.addEventListener('mouseup', endPan);
      lastPoint.current = { x: e.clientX, y: e.clientY };
    },
    [pan, endPan]
  );
  return [panState, startPan, isPanDisabled];
}

export default usePan;
