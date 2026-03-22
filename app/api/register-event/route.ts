import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const registrations: any[] = []

export async function POST(req: Request) {

  const body = await req.json()

  const newRegistration = {
    name: body.name,
    email: body.email,
    event: body.event,
    date: new Date().toLocaleString()
  }

  registrations.push(newRegistration)

  try {

    // Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "hamsadhanabalan@gmail.com",   // replace with your gmail
        pass: "fpuz qhrx lrns ovcd"      // replace with gmail app password
      }
    })

    // Send Email
    const info = await transporter.sendMail({
      from: `"Event Team" <hamsadhanabalan@gmail.com>`,
      to: body.email,
      subject: "Event Registration Successful",
      text: `Hello ${body.name},

You have successfully registered for ${body.event}.

Thank you for registering!

Event Team`
    })

    console.log("Email sent:", info.response)

  } catch (error) {

    console.log("Email error:", error)

  }

  return NextResponse.json({
    message: "Registration successful and email sent",
    data: newRegistration
  })
}

export async function GET() {
  return NextResponse.json(registrations)
}

