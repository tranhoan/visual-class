import { RefObject, useCallback, useEffect, useRef } from 'react';
import create from 'zustand';
import { SidebarContent } from '../components/sidebar/SidebarContentFactory';
import { UserType } from '../data/users-data';

type UserDataType = {
  isWebcamOn: boolean;
  isMicOn: boolean;
  isMegaphoneOn: boolean;
  sidebarContent: SidebarContent;
  isSharingScreen: boolean;
  isLoggedIn: boolean;
  setIsWebcamOn: () => void;
  setIsMicOn: () => void;
  setSidebarContent: (content: SidebarContent) => void;
  setIsSharingScreen: (isSharing: boolean) => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
  setIsMegaphoneOn: () => void;
};

type ParticipantStoreType = {
  participants: UserType[];
  setUsers: (users: UserType[]) => void;
};

export const useUserStore = create<UserDataType>((set) => ({
  isWebcamOn: true,
  isMicOn: true,
  isMegaphoneOn: true,
  isSharingScreen: false,
  sidebarContent: null,
  isLoggedIn: false,
  setIsWebcamOn: () =>
    set((prevState) => ({ isWebcamOn: !prevState.isWebcamOn })),
  setIsMicOn: () => set((prevState) => ({ isMicOn: !prevState.isMicOn })),
  setSidebarContent: (content) => set({ sidebarContent: content }),
  setIsSharingScreen: (isSharingScreen) => set({ isSharingScreen }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setIsMegaphoneOn: () =>
    set((prevState) => ({ isMegaphoneOn: !prevState.isMegaphoneOn })),
}));

export const useParticipantsStore = create<ParticipantStoreType>((set) => ({
  participants: [],
  setUsers: (participantArray) => set({ participants: participantArray }),
}));

export const useStreamWebcam = (
  targetElementRef: RefObject<HTMLVideoElement>
): [enable: () => void, disable: () => void] => {
  const isWebcamOn = useUserStore((state) => state.isWebcamOn);
  const videoRef = useRef(targetElementRef.current);
  const enableWebcam = useCallback(() => {
    videoRef.current = targetElementRef.current;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current!.srcObject = stream;
        videoRef.current!.play();
      })
      .catch((err) => {
        console.error('error:', err);
      });
  }, [targetElementRef]);
  const disableWebcam = useCallback(() => {
    if (!videoRef.current || !videoRef.current.srcObject) {
      return;
    }
    var stream = videoRef.current.srcObject as MediaStream;
    var tracks = stream.getTracks();
    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }
  }, []);
  useEffect(() => {
    enableWebcam();
    return () => {
      disableWebcam();
    };
  }, [enableWebcam, isWebcamOn, disableWebcam]);
  return [enableWebcam, disableWebcam];
};
