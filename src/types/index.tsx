interface IUserAddress {
  street: string;
  city: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IUserAddress;
}
