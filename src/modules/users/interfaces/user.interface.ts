export interface IUser {
  username: string;
  email: string;
  password: string;
  profileId: string;
  activityId: string;
  adminId: string;
  customerId: string;
  managerId: string;
  activated: boolean;
}

export interface ICreateUser {
  username: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}

export interface IUpdateUser {
  username: string;
  password: string;
  phone: string;
}
