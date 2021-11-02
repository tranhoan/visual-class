import {
  useCallback,
  useRef,
  useState,
  MouseEvent as SyntheticMouseEvent,
} from 'react';

type Point = {
  x: number;
  y: number;
};

const origin = { x: 0, y: 0 };

function usePan(): [Point, (e: SyntheticMouseEvent) => void] {
  const [panState, setPanState] = useState<Point>(origin);
  const lastPoint = useRef(origin);

  const pan = useCallback((e: MouseEvent) => {
    const startPoint = lastPoint.current;
    const currentPoint = { x: e.pageX, y: e.pageY };
    lastPoint.current = currentPoint;

    setPanState((prevState) => {
      return {
        x: prevState.x + (startPoint.x - currentPoint.x),
        y: prevState.y + (startPoint.y - currentPoint.y),
      };
    });
  }, []);

  const endPan = useCallback(() => {
    document.removeEventListener('mousemove', pan);
    document.removeEventListener('mouseup', endPan);
  }, [pan]);
  const startPan = useCallback(
    (e: SyntheticMouseEvent) => {
      document.addEventListener('mousemove', pan);
      document.addEventListener('mouseup', endPan);
      lastPoint.current = { x: e.pageX, y: e.pageY };
    },
    [pan, endPan]
  );
  return [panState, startPan];
}

export default usePan;
