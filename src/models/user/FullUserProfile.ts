import { User } from "./User";

export interface FullUserProfile extends User {
  firstName: string;
  lastName: string;
}
