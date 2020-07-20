const { uuid } = require("uuidv4");
const { bcryptPassword } = require("../../src/utils/password");

const larissaFakeUser = {
  id: uuid(),
  first_name: "Larissa",
  last_name: "Varjão",
  pacient_name: "Zelia",
  email: "larissa@gmail.com",
  password: bcryptPassword("12345678"),
};

const users = [larissaFakeUser];

module.exports = {
  users,
};
