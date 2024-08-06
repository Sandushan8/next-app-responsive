export type SignUpLoginContainerProps = {
  type: containerTypes;
  imageUrl: string;
};

export type submitData = {
  email: string;
  password: string;
  fullName?: string;
};

export enum containerTypes {
  login = "login",
  signup = "signup",
}

export type storeCookiesProps = {
  type: containerTypes;
  data: boolean;
};
