const bcrypt = require("bcryptjs");

const bcryptPassword = async (password) =>
  await bcrypt.hash(password, await bcrypt.genSalt());

module.exports = {
  bcryptPassword,
};
