const bcrypt = require("bcrypt");

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
  }
};
