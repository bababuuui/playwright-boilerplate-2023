import { FullUserProfile } from "../models/user/FullUserProfile";

export class UsersUtils {
  public static generateRandomUserProfile(): FullUserProfile {
    return { username: "bababui123", password: "QweR%123", firstName: "Ilya", lastName: "Andreev" };
  }
}
