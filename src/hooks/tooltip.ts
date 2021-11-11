import { useCallback, useRef } from 'react';
import create from 'zustand';

export type position = 'top' | 'right' | 'bottom' | 'left';
type TooltipStore = {
  top: number;
  left: number;
  visibility: boolean;
  content: string;
  position: position;
  setTop: (top: number) => void;
  setLeft: (left: number) => void;
  setVisibility: (visibility: boolean) => void;
  setContent: (content: string) => void;
  setPosition: (position: position) => void;
};

type TooltipResponse<T extends HTMLElement> = {
  top: number;
  left: number;
  isTooltipVisible: boolean;
  onMouseEnter: (target: T | null, position: position, content: string) => void;
  onMouseLeave: () => void;
  content: string;
  position: position;
};

export const useTooltipStore = create<TooltipStore>((set) => ({
  top: 0,
  left: 0,
  visibility: false,
  content: '',
  position: 'top',
  setTop: (top) => {
    set({ top });
  },
  setLeft: (left) => {
    set({ left });
  },
  setVisibility: (visibility) => {
    set({ visibility });
  },
  setContent: (content) => {
    set({ content });
  },
  setPosition: (position) => {
    set({ position });
  },
}));

export const useTooltip = <T extends HTMLElement>(): TooltipResponse<T> => {
  const tooltipState = useTooltipStore();
  const showTooltip = useCallback(
    (top: number, left: number, position: position, content: string) => {
      tooltipState.setVisibility(true);
      tooltipState.setContent(content ?? '');
      tooltipState.setTop(top);
      tooltipState.setLeft(left);
      tooltipState.setPosition(position ?? 'top');
    },
    [tooltipState]
  );
  const onMouseLeave = () => {
    tooltipState.setVisibility(false);
  };

  const onMouseEnter = useCallback(
    (target: T | null, position: position, content: string) => {
      if (target === null || target === undefined) {
        return;
      }
      const { y, x, bottom, right } = target.getBoundingClientRect();
      let [newX, newY] = [0, 0];
      switch (position) {
        case 'top':
          newX = x;
          newY = y;
          break;
        case 'right':
          newX = x + (right - x);
          newY = y + (bottom - y) / 2;
          break;
        case 'bottom':
          newX = x;
          newY = bottom;
          break;
        case 'left':
          newX = x - (right - x);
          newY = y + (bottom - y) / 2;
          break;
      }

      showTooltip(newY, newX, position, content);
    },
    [showTooltip]
  );

  return {
    isTooltipVisible: tooltipState.visibility,
    top: tooltipState.top,
    left: tooltipState.left,
    content: tooltipState.content,
    position: tooltipState.position,
    onMouseEnter,
    onMouseLeave,
  };
};

export const useTooltipArrayRef = <T extends HTMLElement>(
  numberOfElements: number
) => {
  const tooltipRefs: React.MutableRefObject<Array<T | null>> = useRef([]);
  if (!tooltipRefs || !tooltipRefs.current) {
    return;
  }
  tooltipRefs.current = tooltipRefs.current.slice(0, numberOfElements);
  return tooltipRefs;
};
