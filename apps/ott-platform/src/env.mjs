import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    CLERK_SECRET_KEY: z.string(),
    RESEND_API_KEY: z.string(),
    RESEND_COMPANY_NAME: z.string(),
    RESEND_COMPANY_URL: z.string().url(),
    RESEND_MAIL_FROM: z.string(),
    MUX_ACCESS_TOKEN_ID: z.string(),
    MUX_SECRET_KEY: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // Next App
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // Clerk
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    // Resend
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_COMPANY_NAME: process.env.RESEND_COMPANY_NAME,
    RESEND_COMPANY_URL: process.env.RESEND_COMPANY_URL,
    RESEND_MAIL_FROM: process.env.RESEND_MAIL_FROM,
    // Mux
    MUX_ACCESS_TOKEN_ID: process.env.MUX_ACCESS_TOKEN_ID,
    MUX_SECRET_KEY: process.env.MUX_SECRET_KEY
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})