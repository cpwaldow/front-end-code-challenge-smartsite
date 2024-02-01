import requiredMask from '../assets/required-mask.png';
import recommendedMask from '../assets/recommended-mask.png';
import requiredTowel from '../assets/required-towel.png';
import recommendedTowel from '../assets/recommended-towel.png';
import parcialFountain from '../assets/partial-fountain.png';
import forbiddenFountain from '../assets/forbidden-fountain.png';
import requiredLockerroom from '../assets/required-lockerroom.png';
import partialLockerroom from '../assets/partial-lockerroom.png';
import forbiddenLockerroom from '../assets/forbidden-lockerroom.png';

type OutfitType = {
  item: string;
  imgs: {
    src: string;
    info: string;
  }[];
}[];

type GymItemsType = {
  item: string;
  obligatoriness: string;
  img: string;
}[];

export const outfit: OutfitType = [
  {
    item: 'Máscara',
    imgs: [
      {
        src: requiredMask,
        info: 'Obrigatório',
      },
      {
        src: recommendedMask,
        info: 'Recomendado',
      },
    ],
  },
  {
    item: 'Toalha',
    imgs: [
      {
        src: requiredTowel,
        info: 'Obrigatório',
      },
      {
        src: recommendedTowel,
        info: 'Recomendado',
      },
    ],
  },
  {
    item: 'Bebedouro',
    imgs: [
      {
        src: parcialFountain,
        info: 'Parcial',
      },
      {
        src: forbiddenFountain,
        info: 'Proibido',
      },
    ],
  },
  {
    item: 'Vestiário',
    imgs: [
      {
        src: requiredLockerroom,
        info: 'Liberado',
      },
      {
        src: partialLockerroom,
        info: 'Parcial',
      },
      {
        src: forbiddenLockerroom,
        info: 'Fechado',
      },
    ],
  },
];

export const gymItems: GymItemsType = [
  {
    item: 'mask',
    obligatoriness: 'required',
    img: requiredMask,
  },
  {
    item: 'mask',
    obligatoriness: 'recommended',
    img: recommendedMask,
  },
  {
    item: 'towel',
    obligatoriness: 'required',
    img: requiredTowel,
  },
  {
    item: 'towel',
    obligatoriness: 'recommended',
    img: requiredTowel,
  },
  {
    item: 'fountain',
    obligatoriness: 'not_allowed',
    img: forbiddenFountain,
  },
  {
    item: 'fountain',
    obligatoriness: 'partial',
    img: parcialFountain,
  },
  {
    item: 'locker_room',
    obligatoriness: 'allowed',
    img: requiredLockerroom,
  },
  {
    item: 'locker_room',
    obligatoriness: 'partial',
    img: partialLockerroom,
  },
  {
    item: 'locker_room',
    obligatoriness: 'closed',
    img: forbiddenLockerroom,
  },
];
