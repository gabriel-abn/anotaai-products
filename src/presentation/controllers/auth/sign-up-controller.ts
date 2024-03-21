import {
  HttpRequest,
  HttpResponse,
  badRequest,
  success,
} from "@src/presentation/common";
import { InvalidMissingParams } from "@src/presentation/errors";
import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(3),
});

type SignUpRequest = z.infer<typeof signUpSchema>;

export class SignUpController {
  constructor(private readonly addAccount: any) {}

  async handle(request: HttpRequest<SignUpRequest>): Promise<HttpResponse> {
    if (!request.body.email) {
      return badRequest(new InvalidMissingParams("email"));
    }

    if (!request.body.password) {
      return badRequest(new InvalidMissingParams("password"));
    }

    if (!request.body.username) {
      return badRequest(new InvalidMissingParams("username"));
    }

    const { email, password, username } = request.body;

    const user = await this.addAccount.execute({
      email,
      password,
      username,
    });

    return success(user);
  }
}
