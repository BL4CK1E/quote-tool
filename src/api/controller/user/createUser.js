const { getRepository } = require('typeorm');
const { USER } = require('../../utilities/constants');
const { validateUserEmail, hashPassword } = require('../../utilities/utilities');

const createUser = async (User) => {
  // Shallow Copy Obj
  const newUser = { ...User };
  // Validate User Data
  if (!validateUserEmail(newUser)) {
    throw new Error('There was an issue with saving the user, invalid email.');
  }
  // Hash Password
  newUser.password = await hashPassword(newUser.password);
  // Save User
  const userRepository = getRepository(USER);
  const result = await userRepository.save(newUser)
    .then((savedUser) => {
      // Shallow Copy Obj
      const returningUser = { ...savedUser };
      // Remove Password and Return Object w/o Password
      delete returningUser.password;
      return returningUser;
    })
    .catch((err) => {
      throw new Error(`There was an issue saving the user: ${err}`);
    });
  return result;
};

module.exports = createUser;
