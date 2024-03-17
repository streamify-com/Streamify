export const unknownError =
  "An unknown error occurred. Please try again later.";

export const redirects = {
  toLogin: "/signin",
  toSignup: "/signup",
  afterLogin: "/test",
  afterLogout: "/",
  toVerify: "/verify-email",
  afterVerify: "/test",
} as const;

export const dbPrefix = "streamify";
