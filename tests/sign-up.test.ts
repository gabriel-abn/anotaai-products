import { faker } from "@faker-js/faker";
import { makeSignUp } from "@src/main/factory/auth/sign-up-factory";
import { SignUpController } from "@src/presentation/controllers";

describe("SignUp", () => {
  let controller: SignUpController;

  beforeEach(() => {
    controller = makeSignUp();
  });

  describe("should return 400", () => {
    it("if invalid password given", async () => {
      const response = await controller.handle({
        body: {
          email: faker.internet.email(),
          password: "123",
          username: faker.internet.userName(),
        },
      });

      expect(response.statusCode).toBe(400);
    });

    it("if invalid email given", async () => {
      const response = await controller.handle({
        body: {
          email: "any_email",
          password: "Gab!1234",
          username: faker.internet.userName(),
        },
      });

      expect(response.body.error).toBe("InvalidMissingParams");
      expect(response.statusCode).toBe(400);
    });

    it("if username already exists", async () => {
      const username = faker.internet.userName();

      await controller.handle({
        body: {
          email: faker.internet.email(),
          username,
          password: "Gab!1234",
        },
      });

      const response = await controller.handle({
        body: {
          email: faker.internet.email(),
          username,
          password: "Gab!1234",
        },
      });

      expect(response.body.error).toBe("InvalidMissingParams");
      expect(response.statusCode).toBe(400);
    });
  });

  it("should register and save user", async () => {
    const response = await controller.handle({
      body: {
        email: faker.internet.email(),
        password: "Gabriel!234",
        username: faker.internet.userName(),
      },
    });

    expect(response.statusCode).toBe(200);
  });
});
