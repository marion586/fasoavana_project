export interface UserModel {
  id: number;
  name: string;
}

export interface ITokenState {
  refreshed: boolean;
  valid: boolean;
}

export interface IAppState {
  currentUser: UserModel | null;
  tokenStatus: boolean;
  accessTokenState: ITokenState | null;
}
