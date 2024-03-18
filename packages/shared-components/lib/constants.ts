export const unknownError =
  "An unknown error occurred. Please try again later.";

export const redirects = {
  toLogin: "/signin",
  toSignup: "/signup",
  afterLogin: "/test",
  afterLogout: "/signin",
  toVerify: "/verify",
  afterVerify: "/test",
} as const;

export const dbPrefix = "streamify";
