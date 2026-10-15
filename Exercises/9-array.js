'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Julius Caesar', phone: '+380445554434' },
  { name: 'Nero', phone: '+380445554435' },
];

const findPhoneByName = (name) => {
  for (const p of phonebook) {
    if (p.name === name) return p.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
