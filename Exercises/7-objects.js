'use strict';

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };
  obj1.name = 'Julius'; // OK: const keeps the reference, not fields
  obj2.name = 'Julius'; // OK
  obj2 = { name: 'Nero' }; // OK: let allows a new reference
};

module.exports = { fn };
