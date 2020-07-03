import * as User from "../../src/user/model";
import * as faker from "faker";
import { setupDB } from "../fixtures/db";
import { generateUser } from "../generators/user";
import {
  createUser,
  loginUser,
  deleteUser,
  updateUser,
} from "../requests/user";

describe("User test - create", () => {
  let newUser;
  let secondUser;
  let secondDB;
  let secondDBToken;

  beforeAll(async () => {
    await setupDB();
  });

  beforeEach(async () => {
    newUser = generateUser();
    secondUser = generateUser();
    await createUser(secondUser);
    const userBody = (await loginUser(secondUser.email, secondUser.password))
      .body;
    secondDB = userBody.user;
    secondDBToken = userBody.token;
  });

  test("User should not create user when missing email", async () => {
    delete newUser.email;
    const response = await createUser(newUser);

    expect(response.status).toBe(400);
  });

  test("User should not create user when missing first name", async () => {
    delete newUser.firstName;
    const response = await createUser(newUser);

    expect(response.status).toBe(400);
  });

  test("User should create user with correct arguments", async () => {
    const response = await createUser(newUser);

    const user = await User.getByEmail(newUser.email);
    const userFromResponse = response.body;

    expect(response.status).toBe(201);
    expect(user).not.toBeUndefined();
    expect(userFromResponse.email).toBe(user.email);
    expect(userFromResponse.firstName).toBe(user.first_name);
    expect(userFromResponse.lastName).toBe(user.last_name);
    expect(userFromResponse.id).toBe(user.id);
    expect(userFromResponse.password).toBeUndefined();
    expect(userFromResponse.createdAt).not.toBeNull();
    expect(userFromResponse.updatedAt).not.toBeNull();
    expect(userFromResponse.deletedAt).toBeNull();
  });

  test("User should not login with invalid email", async () => {
    await createUser(newUser);
    const response = await loginUser("", newUser.password);
    expect(response.status).toBe(401);
  });

  test("User should not login with invalid password", async () => {
    await createUser(newUser);
    const response = await loginUser(newUser.email, "1234");
    expect(response.status).toBe(401);
  });

  test("User should login with valid email and password", async () => {
    await createUser(newUser);
    const response = await loginUser(newUser.email, newUser.password);
    const userFromResponse = response.body.user;
    const user = await User.getByEmail(newUser.email);

    expect(response.status).toBe(200);
    expect(user).not.toBeUndefined();
    expect(response.body.token).not.toBeUndefined();
    expect(userFromResponse.email).toBe(user.email);
    expect(userFromResponse.firstName).toBe(user.first_name);
    expect(userFromResponse.lastName).toBe(user.last_name);
    expect(userFromResponse.id).toBe(user.id);
    expect(userFromResponse.password).toBeUndefined();
    expect(userFromResponse.createdAt).not.toBeNull();
    expect(userFromResponse.updatedAt).not.toBeNull();
    expect(userFromResponse.deletedAt).toBeNull();
  });

  test("User should not update with invalid token", async () => {
    const response = await updateUser(
      secondUser.firstName,
      secondUser.lastName,
      secondUser.email,
      "invalidToken"
    );
    expect(response.status).toBe(401);
  });

  test("User should not update with invalid email", async () => {
    const response = await updateUser(
      secondUser.firstName,
      secondUser.lastName,
      "invalidemail",
      secondDBToken
    );
    expect(response.status).toBe(400);
  });

  test("User should update with correct arguments", async () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const response = await updateUser(
      firstName,
      lastName,
      email,
      secondDBToken
    );
    expect(response.status).toBe(200);

    const user = await User.get(secondDB.id);
    expect(user).not.toBeUndefined();
    expect(user.id).toBe(secondDB.id);
    expect(user.email).toBe(email);
    expect(user.first_name).toBe(firstName);
    expect(user.last_name).toBe(lastName);
  });

  test("User should update with correct arguments - missing firstName", async () => {
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const response = await updateUser(null, lastName, email, secondDBToken);
    expect(response.status).toBe(200);

    const user = await User.get(secondDB.id);
    expect(user).not.toBeUndefined();
    expect(user.id).toBe(secondDB.id);
    expect(user.email).toBe(email);
    expect(user.first_name).toBe(secondDB.firstName);
    expect(user.last_name).toBe(lastName);
  });

  test("User should update with correct arguments - missing lastName", async () => {
    const firstName = faker.name.firstName();
    const email = faker.internet.email();
    const response = await updateUser(firstName, null, email, secondDBToken);
    expect(response.status).toBe(200);

    const user = await User.get(secondDB.id);
    expect(user).not.toBeUndefined();
    expect(user.id).toBe(secondDB.id);
    expect(user.email).toBe(email);
    expect(user.first_name).toBe(firstName);
    expect(user.last_name).toBe(secondDB.lastName);
  });

  test("User should update with correct arguments - missing email", async () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const response = await updateUser(firstName, lastName, null, secondDBToken);
    expect(response.status).toBe(200);

    const user = await User.get(secondDB.id);
    expect(user).not.toBeUndefined();
    expect(user.id).toBe(secondDB.id);
    expect(user.email).toBe(secondDB.email);
    expect(user.first_name).toBe(firstName);
    expect(user.last_name).toBe(lastName);
  });

  test("User should not delete with invalid token", async () => {
    const response = await deleteUser("invalidToken");
    expect(response.status).toBe(401);
  });

  test("User should delete with correct arguments", async () => {
    const response = await deleteUser(secondDBToken);
    expect(response.status).toBe(200);

    const user = await User.get(secondDB.id);
    expect(user.deleted_at).not.toBeNull();
  });
});
