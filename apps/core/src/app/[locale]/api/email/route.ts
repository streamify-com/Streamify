import { NextResponse } from "next/server";
import NewsletterEmail from "@/emails/newsletter";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email } = await request.json();

  try {
    await resend.emails.send({
      from: `${process.env.RESEND_COMPANY_NAME} <${process.env.RESEND_MAIL_FROM}>`,
      to: email,
      subject: "Newsletter for Streamify OTT",
      react: NewsletterEmail({
        firstName,
        lastName,
      }),
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      },
    );
  }
}
