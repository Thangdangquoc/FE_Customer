import {AppUser} from "./AppUser";

export class Customer {
  id?: number;
  name: string;
  phoneNumber: string;
  avatar?: string;
  address?: string;
  appUser?: AppUser;
  isAccept: boolean;
  isActive: boolean;


  constructor(id: number, name: string, phoneNumber: string, avatar: string, address: string, appUser: AppUser,isAccept: boolean, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.avatar = avatar;
    this.address = address;
    this.appUser = appUser;
    this.isAccept = isAccept;
    this.isActive = isActive;
  }
}
