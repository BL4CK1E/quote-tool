/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable brace-style */

const { getRepository } = require('typeorm');
const jwt = require('jsonwebtoken');
const RedisStore = require('../../db/redis');
const { USER, SECRET } = require('../../utilities/constants');
const { comparePassword } = require('../../utilities/utilities');

const authUser = async ({ username, password }) => {
  const userRepository = getRepository(USER);
  const result = await userRepository.findOneOrFail({ where: [{ username }] })
    .then(async (foundUser) => {
      // Shallow Copy Obj
      const authorisedUser = { ...foundUser };
      // Compare Password
      const compare = await comparePassword(password, authorisedUser.password);
      // FAIL: Return False for Compare Failure
      if (!compare) { return false; }
      // PASS: Create Payload, Create Token, Store w / Expiry
      const payload = JSON.stringify({
        id: authorisedUser.id * 1937 / 2,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
      });
      const token = await jwt.sign(payload, SECRET);
      RedisStore.set(token, authorisedUser.id, 'EX', 60 * 60 * 24 * 7);
      // Strip Password
      delete authorisedUser.password;
      return { token, authorisedUser };
    })
    .catch(() => {
      throw new Error('There was an issue authenticating this user.');
    });

  return result;
};

module.exports = authUser;
