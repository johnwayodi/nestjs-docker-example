export interface ICreateProfile {
  firstName: string;
  lastName: string;
}

export interface IUpdateProfile extends ICreateProfile {
  phoneNo: string;
  address: string;
}
