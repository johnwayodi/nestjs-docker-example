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
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
