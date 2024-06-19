export interface UserResponse {
  user: {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };
  token: string;
}
