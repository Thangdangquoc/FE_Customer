import {Role} from "./Role";


export class UserToken{
  id: number;
  username: string;
  token:string;
  roles: Role[];


  constructor(id: number, username: string, token: string, roles: Role[]) {
    this.id = id;
    this.username = username;
    this.token = token;
    this.roles = roles;
  }
}
