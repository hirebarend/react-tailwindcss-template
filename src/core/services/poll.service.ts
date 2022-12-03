import { addDoc, getDocs, query, where } from "firebase/firestore/lite";
import { votesCollection } from "../firebase";
import { Poll, Token, Vote } from "../models";

export class PollService {
  public static async find(id: string): Promise<Poll | null> {
    return {
      expiry: null,
      id,
      multiple: false,
      options: ["Morning", "Afternoon", "Evening", "Night"],
      title: "Are you a morning, afternoon, evening or night person?",
    };
  }

  protected static generateId(): string {
    const characters: string = "abcdefghijklmnopqrstuvwxyz0123456789";

    let result: string = "";

    for (var i = 0; i < 27; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  }

  public static async vote(
    poll: Poll,
    token: Token,
    option: string
  ): Promise<void> {
    const vote: Vote = {
      id: PollService.generateId(),
      option,
      poll,
      token,
    };

    const querySnapshot = await getDocs(
      query(votesCollection, where("token", "==", vote.token.token))
    );

    if (!querySnapshot.empty) {
      return;
    }

    await addDoc(votesCollection, {
      option,
      pollId: vote.poll.id,
      token: vote.token.token,
    });
  }
}
