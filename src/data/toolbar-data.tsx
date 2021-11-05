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
};

export interface ToolbarDataRecord {
  [key: string]: ToolbarData;
}

export const toolbarData: ToolbarDataRecord = {
  webCamera: {
    name: 'Kamera',
    renderIcon: () => <FiVideo />,
  },
  microphone: {
    name: 'Mikrofon',
    renderIcon: () => <HiOutlineMicrophone />,
  },
  shareScreen: {
    name: 'Sdílet obrazovku',
    renderIcon: () => <FiMonitor />,
  },
  leaveRoom: {
    name: 'Odejít',
    renderIcon: () => <HiOutlineLogout />,
  },
  emojis: {
    name: 'Reakce',
    renderIcon: () => <HiOutlineEmojiHappy />,
  },
  upload: {
    name: 'Nahrát soubor',
    renderIcon: () => <HiOutlineUpload />,
  },
  megaphone: {
    name: 'Mluvit na celou třídu',
    renderIcon: () => <HiOutlineSpeakerphone />,
  },
};
