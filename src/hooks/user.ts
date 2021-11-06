import { ReactElement, RefObject, useEffect } from 'react';
import create from 'zustand';

type UserDataType = {
  isWebcamOn: boolean;
};

export const useUserStore = create<UserDataType>((set) => ({
  isWebcamOn: true,
  setIsWebcamOn: () =>
    set((prevState) => ({ isWebcamOn: !prevState.isWebcamOn })),
}));

export const useStreamWebcam = (
  targetElementRef: RefObject<HTMLVideoElement>
): void => {
  const webcamState = useUserStore((state) => state.isWebcamOn);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        let video = targetElementRef.current;
        video!.srcObject = stream;
        video!.play();
      })
      .catch((err) => {
        console.error('error:', err);
      });
  }, [targetElementRef]);
};
