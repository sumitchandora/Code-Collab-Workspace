import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, code } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Code-Collab" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Code-Collab | Verification Code",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: auto;">
              <h2>Hello, Coder!</h2>
              <p>Your verification code is:</p>
              <h1 style="color: green;">${code}</h1>
              <p>If you didn’t request this, ignore this email.</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log("✅ verification email sent via Gmail");

    return NextResponse.json({
      success: true,
      message: "Verification email sent!",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
