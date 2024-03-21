import { SignUpController } from "@src/presentation/controllers";

export const makeSignUp = () => {
  const useCase = null;
  const controller = new SignUpController(useCase);

  return controller;
};
