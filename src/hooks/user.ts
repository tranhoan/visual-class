import { RefObject, useCallback, useEffect } from 'react';
import create from 'zustand';

type UserDataType = {
  isWebcamOn: boolean;
  isMicOn: boolean;
  setIsWebcamOn: () => void;
  setIsMicOn: () => void;
};

export const useUserStore = create<UserDataType>((set) => ({
  isWebcamOn: true,
  isMicOn: true,
  setIsWebcamOn: () =>
    set((prevState) => ({ isWebcamOn: !prevState.isWebcamOn })),
  setIsMicOn: () => set((prevState) => ({ isMicOn: !prevState.isMicOn })),
}));

export const useStreamWebcam = (
  targetElementRef: RefObject<HTMLVideoElement>
): [enable: () => void, disable: () => void] => {
  const isWebcamOn = useUserStore((state) => state.isWebcamOn);
  const enableWebcam = useCallback(() => {
    const video = targetElementRef.current;
    if (!video) {
      return;
    }
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video!.srcObject = stream;
        video!.play();
      })
      .catch((err) => {
        console.error('error:', err);
      });
  }, [targetElementRef]);
  const disableWebcam = useCallback(() => {
    var stream = targetElementRef!.current!.srcObject as MediaStream;
    var tracks = stream.getTracks();
    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }
  }, [targetElementRef]);
  useEffect(() => {
    enableWebcam();
  }, [enableWebcam, isWebcamOn]);
  return [enableWebcam, disableWebcam];
};
