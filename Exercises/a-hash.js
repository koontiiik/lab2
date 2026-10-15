'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380445554434',
  'Nero': '+380445554435',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
