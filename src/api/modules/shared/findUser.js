const axios = require("axios");
const {
  MS_VARIABLES: { PROPOSIFY_MS_AUTH }
} = require("../../config/config");

const findUser = async user => {
  const response = await axios
    .get(`${PROPOSIFY_MS_AUTH}/user/find?user=${user}`)
    .then(res => res.data);
  return response;
};

module.exports = findUser;
