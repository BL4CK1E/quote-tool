const { getRepository } = require("typeorm");
const { USER } = require("../../utilities/constants");

const findUser = async id => {
  const userRepository = getRepository(USER);
  const result = await userRepository
    .findOneOrFail({ where: [{ id }] })
    .then(async foundUser => {
      // Shallow Copy Obj
      const authorisedUser = { ...foundUser };
      delete authorisedUser.password;
      return authorisedUser;
    })
    .catch(() => {
      throw new Error(`There was an issue finding user with an id of ${id}.`);
    });
  return result;
};

module.exports = findUser;
