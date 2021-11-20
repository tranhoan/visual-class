import step1 from '../resources/drag.mp4';
import step2 from '../resources/pan.mp4';
import step3 from '../resources/zoom.mp4';
import step4 from '../resources/enter-room.mp4';

export type InstructionData = {
  heading: string;
  description: string;
  videoSource: string;
};

export const instructionData: Array<InstructionData> = [
  {
    heading: 'Vítejte ve VisualClass!',
    description:
      'Ve VirtualClass se můžete pohybovat pomocí vaší ikonky. Ikonku stačí myší táhnout a přemístit do libovolného místa.',
    videoSource: step1,
  },
  {
    heading: 'Pohyb v prostoru',
    description:
      'Celý prostor si můžete prohlídnout tím, že na prázdném místě táhnete myší.',
    videoSource: step2,
  },
  {
    heading: 'Škálování prostoru',
    description: 'Kolečkem u myši nebo pomocí touchpadu si prostor přiblížíte.',
    videoSource: step3,
  },
  {
    heading: 'Vstoupení do prostoru',
    description:
      'Ve VirtualClass si můžete libovolně vytvářet virtuální místnosti. Do těch vstoupíte přetáhnutím Vaší ikonky do prostoru místnosti.',
    videoSource: step4,
  },
];
