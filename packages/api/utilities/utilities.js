const bcrypt = require('bcrypt');

module.exports = {
  // Immutable Functions
  immutableMove(arr, from, to) {
    return arr.reduce((prev, current, idx, self) => {
      if (from === to) {
        prev.push(current);
      }
      if (idx === from) {
        return prev;
      }
      if (from < to) {
        prev.push(current);
      }
      if (idx === to) {
        prev.push(self[from]);
      }
      if (from > to) {
        prev.push(current);
      }
      return prev;
    }, []);
  },
  immutablePropUpdate(array, objProp) {
    const result = array.map((obj, index) => {
      const newObj = { ...obj };
      newObj[objProp] = index + 1;
      return newObj;
    });
    return result;
  },
  // Validation Functions
  validateUserEmail({ email }) {
    // Email REGEX Pattern & Check
    // eslint-disable-next-line no-useless-escape
    const emailPatter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = email.match(emailPatter);
    // If pass, return true
    if (emailCheck !== null || email === '') { return true; }
    // If fail, return false
    return false;
  },
  // Password Handling
  async hashPassword(password) {
    const result = await bcrypt.hash(password, 12);
    return result;
  },
  async comparePassword(password, hashedPassword) {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
  },
};
