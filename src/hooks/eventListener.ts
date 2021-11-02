import { RefObject, useEffect } from 'react';

function useEventListener<K extends keyof GlobalEventHandlersEventMap>(
  ref: RefObject<HTMLElement | null>,
  listener: (event: GlobalEventHandlersEventMap[K]) => void,
  event: K,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    const listenerWrapper = ((e: GlobalEventHandlersEventMap[K]) =>
      listener(e)) as EventListener;
    ref.current?.addEventListener(event, listenerWrapper, options);
    return () => node.removeEventListener(event, listenerWrapper);
  }, [ref, event, listener, options]);
}

export default useEventListener;
