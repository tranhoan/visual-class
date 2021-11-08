import {
  HiOutlineMicrophone,
  HiOutlineLogout,
  HiOutlineEmojiHappy,
  HiOutlineUpload,
  HiOutlineSpeakerphone,
} from 'react-icons/hi';
import { FiMonitor, FiVideo } from 'react-icons/fi';
import { ReactElement } from 'react';

export type ToolbarData = {
  name: string;
  renderIcon: () => ReactElement;
  onClick: () => void;
  type: ActionType;
};

export type ActionType =
  | 'normal'
  | ['isWebcamOn', 'setIsWebcamOn']
  | ['isMicOn', 'setIsMicOn'];

export interface ToolbarDataRecord {
  [key: string]: ToolbarData;
}

export const toolbarData: ToolbarDataRecord = {
  webCamera: {
    name: 'Kamera',
    renderIcon: () => <FiVideo />,
    onClick: () => console.log('hoang'),
    type: ['isWebcamOn', 'setIsWebcamOn'],
  },
  microphone: {
    name: 'Mikrofon',
    renderIcon: () => <HiOutlineMicrophone />,
    onClick: () => console.log('hoang'),
    type: ['isMicOn', 'setIsMicOn'],
  },
  shareScreen: {
    name: 'Sdílet obrazovku',
    renderIcon: () => <FiMonitor />,
    onClick: () => console.log('hoang'),
    type: 'normal',
  },
  leaveRoom: {
    name: 'Odejít',
    renderIcon: () => <HiOutlineLogout />,
    onClick: () => console.log('hoang'),
    type: 'normal',
  },
  emojis: {
    name: 'Reakce',
    renderIcon: () => <HiOutlineEmojiHappy />,
    onClick: () => console.log('hoang'),
    type: 'normal',
  },
  upload: {
    name: 'Nahrát soubor',
    renderIcon: () => <HiOutlineUpload />,
    onClick: () => console.log('hoang'),
    type: 'normal',
  },
  megaphone: {
    name: 'Mluvit na celou třídu',
    renderIcon: () => <HiOutlineSpeakerphone />,
    onClick: () => console.log('hoang'),
    type: 'normal',
  },
};
