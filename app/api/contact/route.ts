import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, message } = body

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
        }

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 })
        }

        if (name.length < 2 || name.length > 100) {
            return NextResponse.json({ error: "Name must be between 2 and 100 characters" }, { status: 400 })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
        }

        if (message.length < 10 || message.length > 1000) {
            return NextResponse.json({ error: "Message must be between 10 and 1000 characters" }, { status: 400 })
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <contact@rebirthstudio.org>",
            to: "marilegrelle@gmail.com",
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Contact Form Submission</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #bd9b60 0%, #2E2A2B 100%);
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .header h1 {
                color: #ffffff;
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #ffffff;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #2E2A2B;
                margin-bottom: 5px;
                display: block;
              }
              .value {
                color: #555;
                padding: 10px;
                background: #f7f7f7;
                border-radius: 4px;
              }
              .message-box {
                background: #f7f7f7;
                border-left: 4px solid #bd9b60;
                padding: 15px;
                border-radius: 4px;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                background: #f7f7f7;
                padding: 20px;
                text-align: center;
                border-radius: 0 0 8px 8px;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your portfolio contact form at ${new Date().toLocaleString()}</p>
            </div>
          </body>
        </html>
      `,
        })

        if (error) {
            return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
        }

        return NextResponse.json({ success: true, id: data?.id }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
    }
}
