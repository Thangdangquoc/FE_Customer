import {UserToken} from "./UserToken";
import {AppUser} from "./AppUser";

export class Merchant {
  id : number;
  name: string;
  phoneNumber: string;
  avatar: string;
  imageBanner: string;
  address: string;
  description: string;
  isAccept: boolean;
  isActive: boolean;
  appUser: AppUser;


  constructor(id: number, name: string, phoneNumber: string, avatar: string, imageBanner: string, address: string,description: string, isAccept: boolean, isActive: boolean, appUser: AppUser) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.avatar = avatar;
    this.imageBanner = imageBanner;
    this.address = address;
    this.description = description;
    this.isAccept = isAccept;
    this.isActive = isActive;
    this.appUser = appUser;
  }
}
