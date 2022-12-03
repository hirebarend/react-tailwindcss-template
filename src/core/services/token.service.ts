import { Token } from "../models";

export class TokenService {
  public static async find(
    token: string,
    pollId: string
  ): Promise<Token | null> {
    return {
      meta: {
        pollId,
      },
      token,
    };
  }
}
