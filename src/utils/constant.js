const genderType = {
  MALE: 'Male',
  FEMALE: 'Female',
  UNKNOWN: 'Unknown',
};
const statusType = {
  ALIVE: 'Alive',
  DEAD: 'Dead',
  UNKNOWN: 'Unknown',
};
const genders = [
  {
    id: 1,
    name: 'Male',
    value: 'male',
  },
  {
    id: 2,
    name: 'Female',
    value: 'female',
  },
  {
    id: 3,
    name: 'Genderless',
    value: 'genderless',
  },
  {
    id: 4,
    name: 'Unknown',
    value: 'unknown',
  },
];
const status = [
  {
    id: 1,
    name: 'Alive',
    value: 'alive',
  },
  {
    id: 2,
    name: 'Dead',
    value: 'dead',
  },
  {
    id: 3,
    name: 'Unknown',
    value: 'unknown',
  },
];

export {genderType, statusType, genders, status};
