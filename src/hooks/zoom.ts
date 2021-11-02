import React, { RefObject, useState } from 'react';
import useEventListener from './eventListener';

type ScaleOptions = {
  direction: 'up' | 'down';
  interval: number;
};
const MIN_SCALE = 0.5;
const MAX_SCALE = 3;

function useZoom(ref: RefObject<HTMLElement>) {
  const [zoomState, setZoomState] = useState(1);
  const manageZoom = ({ direction, interval }: ScaleOptions) => {
    if (direction === 'up' && zoomState + interval < MAX_SCALE) {
      setZoomState((prevState) => prevState + interval);
    } else if (direction === 'up') {
      setZoomState(MAX_SCALE);
    } else if (direction === 'down' && zoomState - interval > MIN_SCALE) {
      setZoomState((prevState) => prevState - interval);
    } else {
      setZoomState(MIN_SCALE);
    }
  };
  useEventListener(
    ref,
    (e) => {
      e.preventDefault();
      manageZoom({ direction: e.deltaY > 0 ? 'down' : 'up', interval: 0.1 });
    },
    'wheel'
  );
  return zoomState;
}

export default useZoom;
