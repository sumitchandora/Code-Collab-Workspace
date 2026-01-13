// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// export async function POST(req) {
//     try {
//         const { email, code } = await req.json(); // Get email and code from request

//         // Create a transporter
//         const transport = await nodemailer.createTransport({
//             service: 'SendGrid', // For Mailgun, set 'host' and 'port' instead
//             auth: {
//                 user: 'apikey', // for SendGrid, 'user' is 'apikey'
//                 pass: process.env.SENDGRID_API_KEY, // set this API key as an environment variable
//             },
//         });
//         const receiver = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: 'SynapseCode | Verification Code',
//             headers: {
//                 'List-Unsubscribe': `<mailto:${process.env.EMAIL_USER}>`,
//             },
//             html: `
//         <!DOCTYPE html>
//         <html lang="en">
//           <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Verification Code</title>
//           </head>
//           <body style="font-family: Arial, sans-serif;">
//             <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
//               <h2>Hello, Coder!</h2>
//               <p>Your verification code for SynapseCode is:</p>
//               <h3 style="color: green;">${code}</h3>
//               <p>Please enter this code on the website to verify your email.</p>
//               <p>Thank you!</p>
//               <p style="font-size: 12px; color: gray;">
//                 Stealthify | Your Company Address | <a href="mailto:${process.env.EMAIL_USER}">Contact Support</a>
//               </p>
//               <p style="font-size: 12px; color: gray;">If you didn’t request this, please ignore this email.</p>
//             </div>
//           </body>
//         </html>
//         `,
//         };
//         const result = await transport.sendMail(receiver);
//         if(result.rejected.length > 0){
//             return NextResponse.json({ success: false, message: "Verification email not sent!" });
//         }
//         console.log ("iam in send emai -api")
//         return NextResponse.json({ success: true, message: "Verification email sent!" });
//     } catch (error) {
//         return NextResponse.json({ success: false, message: error.message }, { status: 500 });
//     }
// }

// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { email, code } = await req.json();

//     const result = await resend.emails.send({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "SynapseCode | Verification Code",
//       headers: {
//         "List-Unsubscribe": `<mailto:${process.env.EMAIL_USER}>`,
//       },
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//           <head>
//             <meta charset="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Verification Code</title>
//           </head>
//           <body style="font-family: Arial, sans-serif;">
//             <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
//               <h2>Hello, Coder!</h2>
//               <p>Your verification code for SynapseCode is:</p>
//               <h3 style="color: green;">${code}</h3>
//               <p>Please enter this code on the website to verify your email.</p>
//               <p>Thank you!</p>
//               <p style="font-size: 12px; color: gray;">
//                 Stealthify | Your Company Address |
//                 <a href="mailto:${process.env.EMAIL_USER}">Contact Support</a>
//               </p>
//               <p style="font-size: 12px; color: gray;">
//                 If you didn’t request this, please ignore this email.
//               </p>
//             </div>
//           </body>
//         </html>
//       `,
//     });

//     if (result.error) {
//       return NextResponse.json(
//         { success: false, message: result.error.message },
//         { status: 500 }
//       );
//     }

//     console.log("✅ verification email sent via Resend");

//     return NextResponse.json({
//       success: true,
//       message: "Verification email sent!",
//     });
//   } catch (error) {
//     console.error("RESEND ERROR:", error);
//     return NextResponse.json(
//       { success: false, message: error.message },
//       { status: 500 }
//     );
//   }
// }
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
